import { IConfigurationFramework } from "./interfaces";
import { Theme } from "./Theme";
import { Idiom } from "./Idiom";
import { User } from "./User";
import { AppConf } from "./AppConf";
import { transport } from "../transport/Framework";

//-------------------------------------
export class ConfigurationFramework implements IConfigurationFramework {
//-------------------------------------
    readonly Platform = {
        deploymentTag: '',
        cdnDomain: '',
        apps: new AppConf(),
        theme: new Theme(),
        //analytics;
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
            const now = new Date();
            var y = now.getFullYear();
            var m = now.getMonth() + 1;
            var d = now.getDate();
            version = '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
        }
        const v = version;
        this.Platform.deploymentTag = version;
        this.Platform.cdnDomain = cdnDomain ?? '';
        return this.Platform.idiom.addBundlePromise('/i18n').then( ()=>{
            this.Platform.theme.initialize( v );
            //TODO this.School.initialize( v );
            this.User.initialize( v );
        });
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = new ConfigurationFramework();