import { IConfigurationFramework } from "./interfaces";
import { Theme } from "./Theme";
import { Idiom } from "./Idiom";
import { User } from "./User";

export class ConfigurationFramework implements IConfigurationFramework {
    readonly Platform = {
        deploymentTag: '',
        cdnDomain: '',
        theme: new Theme(),
        //analytics;
        idiom: new Idiom(),
        //widgets;
    }
    readonly School = {
        //widgets;
        //apps; -> pinnedApps;
    }
    readonly User = new User();

    initialize( version?:string|null, cdnDomain?:string|null ):void {
        // If version is undefined, default to a new tag every day.
        if( !version ) {
            const now = new Date();
            var y = now.getFullYear();
            var m = now.getMonth() + 1;
            var d = now.getDate();
            version = '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
        }
        this.Platform.deploymentTag = version;
        this.Platform.cdnDomain = cdnDomain ?? '';

        this.Platform.theme.initialize( version );
        this.User.initialize( version );
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = new ConfigurationFramework();