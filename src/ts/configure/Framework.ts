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

    initialize( loggedIn:boolean ):void {
        this.global.initialize( loggedIn );
        this.me.bootstrap();

        // TODO Finir le bootstrapping, voir infra-front/lib.ts
    }
}

/** The whole framework is a singleton. */
export const configure:ConfigurationFramework = (ConfigurationFrameworkFactory as any).instance = new ConfigurationFramework();
