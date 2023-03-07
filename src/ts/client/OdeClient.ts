import { configure } from "../configure/Framework";
import type { IConfigurationFramework } from "../configure/interfaces";
import { notify } from "../notify/Framework";
import { INotifyFramework } from "../notify/interfaces";
import { session } from "../session/Framework";
import type { ISessionFramework } from "../session/interfaces";
import { explorer } from "../explore/Framework";
import type { IExplorerFramework } from "../explore/interfaces";
import { transport } from "../transport/Framework";
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
}

export class OdeClient {
  _session: ISessionFramework;
  _configure: IConfigurationFramework;
  _notify: INotifyFramework;
  _explorer: IExplorerFramework;
  _http: IHttp;

  constructor() {
    this._session = session;
    this._configure = configure;
    this._notify = notify;
    this._explorer = explorer;
    this._http = transport.http;
  }

  /**
   *
   * @param params IParams
   * initialize sessionFramework and configurationFramework
   * can be use on any framework (React, Vue, ...)
   */
  async mount(params: IParams): Promise<void> {
    await Promise.all([
      this._session.initialize(),
      this._configure.initialize(
        params.version || null,
        params.cdnDomain || null,
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
      this._configure.Platform.apps.getWebAppConf(params.app),
      this._configure.Platform.theme.getConf(),
    ]);
  }
}
