import { IConfigurationFramework } from "./interfaces";
import { Theme } from "./Theme";
import { Idiom } from "./Idiom";
import { User } from "./User";
import { AppConf } from "./AppConf";
import { transport } from "../transport/Framework";
import { Analytics } from "./Analytics";

//-------------------------------------
export class ConfigurationFramework implements IConfigurationFramework {
//-------------------------------------
    readonly Platform = {
        deploymentTag: '',
        cdnDomain: '',
        apps: new AppConf(),
        theme: new Theme(),
        analytics: new Analytics(),
        idiom: new Idiom(),
        listLanguages: () => {
            return transport.http.get("/languages");
        }
    }
    readonly School = {
        //apps; -> pinnedApps;
    }
    readonly User = new User();

    initialize( version?:string|null, cdnDomain?:string|null ):Promise<void> {
        // If version is undefined, default to a new tag every day.
        if( !version ) {
            const padWith0 = (val:number):string => (val<10 ? '0' : '')+val.toFixed(0);
            const now = new Date();
            const y = now.getFullYear();
            const m = now.getMonth() + 1;
            const d = now.getDate();
            const h = now.getMinutes() / 10;
            version = `${y}${padWith0(m)}${padWith0(d)}`; //FIXME add ${h.toFixed(0)} to change the tag every 10 minutes
        }
        const v = version;
        this.Platform.deploymentTag = version;
        this.Platform.cdnDomain = cdnDomain ?? '';
        return this.Platform.idiom.addBundlePromise('/i18n')
            .then( () => this.Platform.theme.initialize(v) )
            //TODO .then( () => this.School.initialize( v )
            .then( () => this.User.initialize(v) );
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = new ConfigurationFramework();