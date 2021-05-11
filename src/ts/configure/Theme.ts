import { ConfigurationFrameworkFactory, ITheme } from "./interfaces";
import { TransportFrameworkFactory } from "../transport/interfaces";
import { EVENT_NAME, BootstrappedNotice, NotifyFrameworkFactory } from "../notify/interfaces";

const notify    = NotifyFrameworkFactory.instance;

const http = TransportFrameworkFactory.instance.http;
const idiom = ConfigurationFrameworkFactory.instance.idiom;

export class Theme implements ITheme {
    
}