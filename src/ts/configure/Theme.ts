import { notify } from "../notify/Framework";
import { BootstrappedNotice, EVENT_NAME } from "../notify/interfaces";
import { session } from "../session/Framework";
import { transport } from "../transport/Framework";
import { configure } from "./Framework";
import { ITheme, IThemeConf, IThemeOverrides } from "./interfaces";

export class Theme implements ITheme {
	private _conf?:IThemeConf;
	private _loaded?:Promise<void>;

	// legacy (readonly)
	skinName='';
	themeName='';
	skin= 'raw';
	themeUrl= '/assets/themes/raw/default/';
	templateOverrides:IThemeOverrides= {};
	portalTemplate= '/assets/themes/raw/portal.html';
	basePath= '';
	logoutCallback= '/';

    initialize( version?:string ) {
        const sessionSubscription = notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).subscribe(
            notice => {
                sessionSubscription?.unsubscribe();
                if(notice.userInfo) {
                    this.load( version );
                }
            }
        );
    }

    private get version():string {
        return configure.Platform.deploymentTag;
    }

    private get cdnDomain():string {
        return configure.Platform.cdnDomain;
    }

	private _skinResolved?: (value: ITheme | PromiseLike<ITheme>) => void;
	private _skinRejected?: (reason?: any) => void;
	private _onSkinReady = new Promise<ITheme>((_resolve, _reject) => {
		this._skinResolved = _resolve;
		this._skinRejected = _reject;
	});
	onSkinReady():Promise<ITheme>{
		return this._onSkinReady;
	}

	private _overrideResolved?: (value: IThemeOverrides | PromiseLike<IThemeOverrides>) => void;
	private _overrideRejected?: (reason?: any) => void;
	private _onOverrideReady = new Promise<IThemeOverrides>((_resolve, _reject) => {
		this._overrideResolved = _resolve;
		this._overrideRejected = _reject;
	});
	onOverrideReady():Promise<IThemeOverrides>{
		return this._onOverrideReady;
	}

    async getConf( version?:string ): Promise<IThemeConf> {
		version = version ?? this.version;
        this._conf = this._conf ?? await transport.http.getScript<IThemeConf>( 
			"/assets/theme-conf.js",
			{queryParams:{v:this.version}}, 
			"exports.conf"
		);
		return this._conf;
    }

	load( version?:string ):Promise<void> {
		version = version ?? this.version;
		if( !this._loaded ) {
			this._loaded = session.session.notLoggedIn 
				? this.loadDisconnected(version) 
				: this.loadConnected(version);		
		}
		return this._loaded;
	}

	private loadDisconnected( version:string ): Promise<void>{
		return new Promise<void>((resolve, reject) => {
			transport.http.get('/skin', {queryParams:{v:this.version}})
			.then( data => {
				this.skin = data.skin;
				this.themeUrl = `${this.cdnDomain}/assets/themes/${data.skin}/skins/default/`;
				this.basePath = this.themeUrl + '../../';
				if( this._skinResolved ) {
					this._skinResolved( this );
				}
				transport.http.get(
					`/assets/themes/${data.skin}/template/override.json`, 
					{disableNotifications:true, queryParams:{v:version}}
				).then( override => {
					this.templateOverrides = override;
						if( this._overrideResolved ) {
							this._overrideResolved( this.templateOverrides );
						}
						resolve();
				})
				.catch( e => {
					if( transport.http.latestResponse.status===404 ) {
						resolve();
					} else {
						throw e;
					}
				});
			})
			.catch( e => {
				if( this._skinRejected ) {
					this._skinRejected(e);
				}
				if( this._overrideRejected ) {
					this._overrideRejected( e );
				}
				reject();
			});
		});
	}

	private loadConnected( version:string ): Promise<void>{
		return new Promise<void>((resolve, reject) => {
			transport.http.get('/theme', {queryParams:{"_":version}})
			.then( data => {
				this.skinName = data.skinName;
				this.themeName = data.themeName;
				this.themeUrl = data.skin;
				this.basePath = `${this.cdnDomain}${this.themeUrl}../../`;
				this.skin = this.themeUrl.split('/assets/themes/')[1].split('/')[0];
				this.portalTemplate = `${this.cdnDomain}/assets/themes/${this.skin}/portal.html`;
				this.logoutCallback = data.logoutCallback;
				if( this._skinResolved ) {
					this._skinResolved( this );
				}
				transport.http.get(
					`/assets/themes/${this.skin}/template/override.json`, 
					{disableNotifications:true, queryParams:{v:version}}
				).then( override => {
					this.templateOverrides = override;
					if( this._overrideResolved ) {
						this._overrideResolved( this.templateOverrides );
					}
					resolve();
				})
				.catch( e => {
					if( transport.http.latestResponse.status===404 ) {
						resolve();
						if( this._skinRejected ) {
							this._skinRejected();
						}
						if( this._overrideRejected ) {
							this._overrideRejected( e );
						}
					} else {
						throw e;
					}
				});
			});
		});
	}

	loadThemeJs( theme:string, version:string ) {
        /* TODO si besoin
        const style = jQuery('<script>', {
            type: 'text/javascript',
            src: (window as any).CDN_DOMAIN+`/assets/themes/${theme}/js/theme.js?version=${version}`,
            id: 'themeJS'
        });
        */
    }
}

/*
let _skinResolved, _skinRejected = null;
export var skin = {
	private addDirectives: undefined as any,
	private templateMapping: {},
	listThemes: function(cb){
		http().get('/themes').done(function(themes){
			if(typeof cb === 'function'){
				cb(themes);
			}
		});
	},
	setTheme: function(theme){
		ui.setStyle(theme.path);
		http().get('/userbook/api/edit-userbook-info?prop=theme-' + skin + '&value=' + theme._id);
	},
	
	skins: [],
	pickSkin: false,
	themeConf: undefined,
	themeConfPromise: undefined,
	listSkins: function(): Promise<any>{
		let conf = { overriding:[] };
		if(this.themeConfPromise){
			return this.themeConfPromise;
		}
		this.themeConfPromise = new Promise<void>((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('get', '/assets/theme-conf.js');
			xhr.onload = async () => {
				eval(xhr.responseText.split('exports.')[1]);
				this.themeConf = this.conf = conf;
				const currentTheme = this.conf.overriding.find(t => t.child === skin.skin);
				if(currentTheme.group){
					this.skins = this.conf.overriding.filter(t => t.group === currentTheme.group);
				}
				else{
					this.skins = this.conf.overriding;
				}
				if(this.skins.length > 1){
					this.pickSkin = true;
				}
				resolve();
			};
			xhr.send();
		});
		return this.themeConfPromise;
	},
	loadBookmarks: async function(){
		return new Promise<void>((resolve, reject) => {
			http().get('/userbook/preference/apps').done(function(data){
				if(!data.preference){
					data.preference = null;
				}
				model.me.myApps = JSON.parse(data.preference);
				if (_.isArray(model.me.myApps)) {
					model.me.bookmarkedApps = model.me.myApps;
					model.me.myApps = {
						bookmarks: _.map(model.me.myApps, app => app.name),
						applications: []
					}
					http().putJson('/userbook/preference/apps', model.me.myApps);
					resolve();
					return;
				}
				if (!model.me.myApps){
					model.me.myApps = {
						bookmarks: [],
						applications: []
					}
				}
				model.me.bookmarkedApps = [];
				var upToDate = true;
				let remove = [];
				model.me.myApps.bookmarks.forEach(function(appName, index){
					var foundApp = _.findWhere(model.me.apps, { name: appName });
					if(foundApp){
						var app = {};
						for(var property in foundApp){
							app[property] = foundApp[property];
						}
						model.me.bookmarkedApps.push(app);
					}
					else{
						remove.push(appName);
						upToDate = false;
					}
				});
				remove.forEach(function(app) {
					var index = model.me.myApps.bookmarks.indexOf(app);
					model.me.myApps.bookmarks.splice(index, 1);
				});
				if(!upToDate){
					http().putJson('/userbook/preference/apps', model.me.myApps);
				}
				resolve();
			});
		});
	},
	loadConnected: async function(): Promise<any>{
		const rand = Math.random();
		const that = this;
		return new Promise<void>((resolve, reject) => {
			http().get('/theme').done(function(data){
				that.skinName = data.skinName;
				that.themeName = data.themeName;
				that.theme = data.skin;
				that.basePath = (window as any).CDN_DOMAIN + that.theme + '../../';
				that.skin = that.theme.split('/assets/themes/')[1].split('/')[0];
				that.portalTemplate = (window as any).CDN_DOMAIN + '/assets/themes/' + that.skin + '/portal.html';
				that.logoutCallback = data.logoutCallback;
				skin.skinResolveFunc();
				http().get('/assets/themes/' + that.skin + '/template/override.json', { token: rand }).done(function(override){
					that.templateMapping = override;
					if (window.entcore.template) {
						window.entcore.template.loadPortalTemplates();
					}
					resolve();
				})
				.e404(() => { 
					resolve(); 
					skin.skinRejectedFunc();
				});
			});
		});
	},
	getHelpPath(): Promise<String> {
		let conf = { overriding:[] };
		return new Promise<any>((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('get', '/assets/theme-conf.js');
			xhr.onload = async () => {
				eval(xhr.responseText.split('exports.')[1]);
				this.conf = conf;
				const override = this.conf.overriding.find(it => it.child === skin.skin);
				resolve((override.help ? override.help : '/help')); 
			};
			xhr.send();
		});
	}
};
*/




/*
    export const themeService = {
        loadOldWrappedTheme(oldTheme:string, skinName:string){
            let version = 'dev';
            if((window as any).springboardBuildDate){
                version = (window as any).springboardBuildDate;
            }
            jQuery("#themeOld").remove();
            const style = jQuery('<link>', {
                rel: 'stylesheet',
                type: 'text/css',
                href: (window as any).CDN_DOMAIN+`/assets/themes/${oldTheme}/skins/${skinName}/wrapped.theme.css?version=${version}`,
                id: 'themeOld'
            }).attr("crossorigin", "anonymous");
            jQuery('head').append(style);
        },
        loadThemeJs(theme:string){
            let version = 'dev';
            if((window as any).springboardBuildDate){
                version = (window as any).springboardBuildDate;
            }
            jQuery("#themeJS").remove();
            const style = jQuery('<script>', {
                type: 'text/javascript',
                src: (window as any).CDN_DOMAIN+`/assets/themes/${theme}/js/theme.js?version=${version}`,
                id: 'themeJS'
            });
            jQuery('body').append(style);
        }
    }
*/
