import { configure as ConfigurationFramework } from "../configure/Framework";
import type { IConfigurationFramework } from "../configure/interfaces";
import { notify } from "../notify/Framework";
import { INotifyFramework } from "../notify/interfaces";
import { session as SessionFramework } from "../session/Framework";
import type { ISessionFramework } from "../session/interfaces";
import { explorer as ExplorerFramework } from "../explore/Framework";
import type { IExplorerFramework } from "../explore/interfaces";
import { transport as TransportFramework } from "../transport/Framework";
import type { IHttp } from "../transport/interfaces";
import { App } from "../globals";

export interface IParams {
  app: App;
  alternativeApp?: boolean;
  version?: string | null;
  cdnDomain?: string | null;
}

export interface IOdeClient {
  mount: () => Promise<void>;
  initialize: () => Promise<any>;
}

export class OdeClient {
  session: ISessionFramework;
  configure: IConfigurationFramework;
  notify: INotifyFramework;
  explorer: IExplorerFramework;
  http: IHttp;

  constructor() {
    this.session = SessionFramework;
    this.configure = ConfigurationFramework;
    this.notify = notify;
    this.explorer = ExplorerFramework;
    this.http = TransportFramework.http;
  }

  /**
   *
   * @param params IParams
   * initialize sessionFramework and configurationFramework
   * can be use on any framework (React, Vue, ...)
   */
  async mount(params?: IParams): Promise<void> {
    await Promise.all([
      this.session.initialize(),
      this.configure.initialize(
        params?.version || null,
        params?.cdnDomain || null,
      ),
    ]);
  }

  /**
   *
   * @param params IParams
   * initialize the current app and the current theme
   */
  async initialize(params: IParams): Promise<any> {
    return await Promise.all([
      this.configure.Platform.apps.getWebAppConf(params.app),
      this.configure.Platform.theme.getConf(),
    ]);
  }
}
