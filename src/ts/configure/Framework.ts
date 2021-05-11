import { ConfigurationFrameworkFactory, IConfigurationFramework, IGlobal, IIdiom, IMe, ITheme } from "./interfaces";
import { Global } from "./Global";
import { Theme } from "./Theme";
import { Idiom } from "./Idiom";
import { Me } from "./Me";

export class ConfigurationFramework implements IConfigurationFramework {
    global: IGlobal = new Global();
    theme: ITheme = new Theme();
    idiom: IIdiom = new Idiom();
    me: IMe = new Me();

    initialize():void {
        // TODO check if user is logged in
        const loggedIn = false;
        (this.global as Global).initialize( loggedIn );
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = (ConfigurationFrameworkFactory as any).instance = new ConfigurationFramework();
configure.initialize();