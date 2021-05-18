import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ERROR_CODE } from "../globals";
import { IHttp, IHttpParams, IHttpResponse } from "./interfaces";

const loadedScripts: { [url: string]: boolean } = {};

export class Http implements IHttp {
    // Axios automatically manages the XSRF-TOKEN cookie and the X-XSRF-TOKEN HTTP header.
    private axios: AxiosInstance;

    private _latestResponse: any;

    constructor(params?: IHttpParams) {
        this.axios = axios.create(this.toAxiosConfig(params));
    }

    private toAxiosConfig(params?: IHttpParams): AxiosRequestConfig {
        if (!params) {
            return axios.defaults;
        } else {
            let p = Object.assign({}, axios.defaults);
            // TODO au cas par cas
            p.params = params;  // Axios will serialize parameters, see https://github.com/axios/axios#request-config
            //if( params. )   p. = params.
            return p;
        }
    }

    private fromAxiosConfig(config?: AxiosRequestConfig): IHttpParams {
        if (!config) {
            config = this.axios.defaults;
        }
        let params = {};
        // TODO au cas par cas
        return params;
    }

    private mapAxiosError<R>(error: AxiosError<R>): R {
        // AxiosError.response and our HttpResponse share the same properties.
        // So we can use it directly, saving CPU and memory.
        // Otherwise, we would map the axios response to our own model.
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            this._latestResponse = error.response;
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this._latestResponse = {
                status: 408,
                statusText: ERROR_CODE.TIME_OUT
            };
        } else {
            // Something happened in setting up the request that triggered an Error
            this._latestResponse = {
                status: 500,
                statusText: ERROR_CODE.UNKNOWN
            };
        }
        throw new Error( ERROR_CODE.TRANSPORT_ERROR );
    }

    private mapAxiosResponse<R>(response: AxiosResponse<R>): R {
        // AxiosResponse and our HttpResponse share the same properties.
        // So we can use it directly, saving CPU and memory.
        // Otherwise, we would map the axios response to our own model.
        this._latestResponse = response;
        return response.data;
    }

    get config(): IHttpParams {
        return this.fromAxiosConfig();
    }

    get latestResponse(): IHttpResponse {
        return this._latestResponse;
    }

    get<T = any, R = any>(url: string, params?: IHttpParams): Promise<R> {
        return this.axios.get<T, AxiosResponse<R>>(url, this.toAxiosConfig(params))
            .then( r => this.mapAxiosResponse(r) )
            .catch<R>(Http.prototype.mapAxiosError);
    }
    post<T = any, R = any>(url: string, data?: any, params?: IHttpParams): Promise<R> {
        return this.axios.post<T, AxiosResponse<R>>(url, data, this.toAxiosConfig(params))
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }
    postFile<T = any, R = any>(url: string, data: any, params?: IHttpParams): Promise<R> {
        const p = this.toAxiosConfig(params);
        if (p.headers['Content-Type']) {
            delete p.headers['Content-Type'];
        }
        return this.axios.post<T, AxiosResponse<R>>(url, data, p)
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }
    postJson<T = any, R = any>(url: string, json: any, params?: IHttpParams): Promise<R> {
        const p = this.toAxiosConfig();
        p.headers['Content-Type'] = 'application/json';
        return this.axios.post<T, AxiosResponse<R>>(url, json, this.toAxiosConfig(params))
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }
    put<T = any, R = any>(url: string, data?: any, params?: IHttpParams): Promise<R> {
        return this.axios.put<T, AxiosResponse<R>>(url, data, this.toAxiosConfig(params))
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }
    /*
        putFile(url: string, data:FormData, opt?:any) {
            //TODO
            return this.axios.putFile(url, data, opt).then( r => this.mapAxiosResponse(r));
        }
    */
    putJson<T = any, R = any>(url: string, json: any, params?: IHttpParams): Promise<R> {
        const p = this.toAxiosConfig(params);
        p.headers['Content-Type'] = 'application/json';
        return this.axios.put<T, AxiosResponse<R>>(url, json, p)
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }
    delete<T = any, R = any>(url: string, params?: IHttpParams): Promise<R> {
        return this.axios.delete<T, AxiosResponse<R>>(url, this.toAxiosConfig(params))
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }
    deleteJson<T = any, R = any>(url: string, json: any): Promise<R> {
        // TODO code review
        return this.axios.delete<T, AxiosResponse<R>>(url, json)
            .then(r => this.mapAxiosResponse(r))
            .catch<R>(e => this.mapAxiosError(e));
    }

    loadScript(url: string, data?: any, params?: IHttpParams, requestName?: string): Promise<void> {
        // TODO code review
        const p = this.toAxiosConfig(params);
        if(typeof data === 'object' || typeof data === 'string') {
            p.params = data;
        }
        return (loadedScripts[url])
            ? Promise.resolve()
            : this.axios.get(url, p).then(r => this.mapAxiosResponse(r)).then(() => {
                loadedScripts[url] = true;
                return;
            })
            .catch<void>(e => this.mapAxiosError(e));
    }
}

/*
var loadedScripts = {};

export class Http {
    statusCallbacks = {};

    serialize(obj:any) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                if (obj[p] instanceof Array) {
                    for (var i = 0; i < obj[p].length; i++) {
                        if (typeof obj[p][i] === 'object') {
                            throw new TypeError("Arrays sent as URIs can't contain objects");
                        }
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p][i]))
                    }
                }
                else {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            }
        }
        return str.join("&");
    }

    events: any = {
    };

    bind(eventName:string, handler:Function) {
        this.events[eventName] = handler;
    };

    parseUrl(path, item) {
        var matchParams = new RegExp(':[a-zA-Z0-9_.]+', "g");
        var params = path.match(matchParams);
        if (!params) {
            params = [];
        }
        var getProp = function (prop, obj) {
            if (prop.indexOf('.') === -1) {
                return obj[prop];
            }
            return getProp(prop.split('.').splice(1).join('.'), obj[prop.split('.')[0]])
        }
        params.forEach(function (param) {
            var prop = param.split(':')[1];

            var data = getProp(prop, item) || '';
            path = path.replace(param, data);
        });
        return path;
    };

    request(url, params) {
        var that = this;
        params.url = url;
        params.cache = false;

        if (!params.headers) {
            params.headers = {};
        }
        if (xsrfCookie) {
            params.headers['X-XSRF-TOKEN'] = xsrfCookie.val;
        }

        var requestName = params.requestName;
        if (requestName && that.events['request-started.' + requestName]) {
            that.events['request-started.' + requestName]();
        }

        this.xhr = $.ajax(params)
            .done(function (e, statusText, xhr) {
                if (typeof that.statusCallbacks.done === 'function') {
                    if (document.cookie === '' && typeof Http.prototype.events.disconnected === 'function') {
                        that.events.disconnected(e, statusText, xhr);
                    }
                    that.statusCallbacks.done(e, statusText, xhr);
                }
                if (requestName && that.events['request-ended.' + requestName]) {
                    that.events['request-ended.' + requestName]();
                }
            })
            .fail(function (e) {
                if (requestName && that.events['request-ended.' + requestName]) {
                    that.events['request-ended.' + requestName]();
                }

                if (typeof that.statusCallbacks['e' + e.status] === 'function') {
                    that.statusCallbacks['e' + e.status].call(that, e);
                }
                else if (typeof that.statusCallbacks.error === 'function') {
                    that.statusCallbacks.error.call(that, e);
                }
                else {
                    if (!params.disableNotifications && e.status !== 0) {
                        notify.error("e" + e.status);
                    }
                }

                console.log('HTTP error:' + e.status);
                console.log(e);
            });
        return this;
    }
}
*/
/*
export function http = (function () {
    var statusEvents = ['done', 'error', 'e401', 'e404', 'e409', 'e500', 'e400', 'e413', 'e504', 'e0'];
    var xsrfCookie;
    if (document.cookie) {
        var cookies = _.map(document.cookie.split(';'), function (c) {
            return {
                name: c.split('=')[0].trim(),
                val: c.split('=')[1].trim()
            };
        });
        xsrfCookie = _.findWhere(cookies, { name: 'XSRF-TOKEN' });
    }

    statusEvents.forEach(function (event) {
        Http.prototype[event] = function (callback) {
            this.statusCallbacks[event] = callback;
            return this;
        }
    });

    Http.prototype.postFile = function (url, data, params) {
        if (typeof params !== 'object') {
            params = {};
        }
        params.contentType = false;
        params.processData = false;

        return this.post(url, data, params)
    };

    Http.prototype.putFile = function (url, data, params) {
        if (typeof params !== 'object') {
            params = {};
        }
        params.contentType = false;
        params.processData = false;

        return this.put(url, data, params)
    };

    Http.prototype.loadScript = function (url, data?: any, params?: any, requestName?: string): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            if (loadedScripts[url]) {
                resolve(loadedScripts[url]);
                return;
            }
            this.get(url, data, params, requestName).done(() => {
                loadedScripts[url] = true;
                resolve();
            });
        });
    }

    var requestTypes = ['get', 'post', 'put', 'delete'];
    requestTypes.forEach(function (type) {
        Http.prototype[type + 'Json'] = function (url, data, params, requestName) {
            if (!params) {
                params = {};
            }
            params.contentType = 'application/json';
            params.data = (window as any).angular.toJson(data);
            params.type = type.toUpperCase();
            return this.request(url, params, requestName);
        };
        Http.prototype[type] = function (url, data, params, requestName) {
            var that = this;

            if (!params) {
                params = {};
            }
            if (typeof data === 'object' || typeof data === 'string') {
                if (type === 'get' || type === 'delete') {
                    if (url.indexOf('?') !== -1) {
                        url += '&' + that.serialize(data);
                    }
                    else {
                        url += '?' + that.serialize(data);
                    }
                }
                else {
                    params.data = data;
                }
            }
            params.type = type.toUpperCase();
            return this.request(url, params, requestName);
        };
    });

    return function () {
        return new Http();
    }
}());
*/

/*
export let toFormData: (obj) => string = http().serialize;
*/

/**
 * Promisified HTTP
 */
/*
export type Promise<R> = Promise<R> & { e400: (e) => void }
export class HttpPromisified<T> {
    constructor(private inner?: any) {
        if (!this.inner) {
            this.inner = http();
        }
    }
    private promisify(req: any): Promise<R> {
        const p = new Promise<R>((resolve, reject) => {
            if (req.xhr && req.xhr.status == 0) { reject(); return; }
            req.done(e => resolve(e)).error(e => reject(e));
        });
        (p as any).e400 = req.e400.bind(req);
        return p as any;
    }
    get(url: string, params?: any): Promise<R> {
        return this.promisify(this.inner.get(url, params));
    }
    post(url: string, params?: any): Promise<R> {
        return this.promisify(this.inner.post(url, params));
    }
    postFile(url: string, data: any, params?: any): Promise<R> {
        return this.promisify(this.inner.postFile(url, data, params));
    }
    postJson(url: string, json: any): Promise<R> {
        return this.promisify(this.inner.postJson(url, json));
    }
    put(url: string, data?: any): Promise<R> {
        return this.promisify(this.inner.put(url, data));
    }
    putJson(url: string, json: any): Promise<R> {
        return this.promisify(this.inner.putJson(url, json));
    }
    delete(url: string): Promise<R> {
        return this.promisify(this.inner.delete(url));
    }
    deleteJson(url: string, json: any): Promise<R> {
        return this.promisify(this.inner.deleteJson(url, json));
    }
    putFile(url: string, data: FormData, opt?: any) {
        return this.promisify(this.inner.putFile(url, data, opt));
    }
}
export function httpPromisy<T>(inner?: any): HttpPromisified<T> {
    return new HttpPromisified<T>(inner);
}
*/
