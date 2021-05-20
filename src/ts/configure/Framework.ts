import { IConfigurationFramework } from "./interfaces";
import { Theme } from "./Theme";
import { Idiom } from "./Idiom";
import { User } from "./User";

export class ConfigurationFramework implements IConfigurationFramework {
    readonly Platform = {
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

    initialize():void {
        this.User.initialize();
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = new ConfigurationFramework();