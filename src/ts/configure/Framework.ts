import { ConfigurationFrameworkFactory, IConfigurationFramework } from "./interfaces";
import { Global } from "./Global";
import { Theme } from "./Theme";
import { Idiom } from "./Idiom";
import { Me } from "./Me";

export class ConfigurationFramework implements IConfigurationFramework {
    global:Global = new Global();
    theme:Theme = new Theme();
    idiom:Idiom = new Idiom();
    me:Me = new Me();

    initialize():void {
        // TODO check if user is logged in
        const loggedIn = false;
        this.global.initialize( loggedIn );
        this.me.bootstrap();
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = (ConfigurationFrameworkFactory as any).instance = new ConfigurationFramework();
configure.initialize();