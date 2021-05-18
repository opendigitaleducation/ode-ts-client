import { transport } from "./Framework";

export type IHttpParams = {};
export type IHttpResponse = {
    status: number;
    statusText: string;
    headers?: any;
};

//-------------------------------------
export abstract class TransportFrameworkFactory {
//-------------------------------------
    static readonly instance: ITransportFramework = transport;
}

//-------------------------------------
export interface ITransportFramework {
//-------------------------------------
    readonly http:IHttp;
    newHttpInstance( params?:IHttpParams ):IHttp;
}

//-------------------------------------
export interface IHttp {
//-------------------------------------
    readonly latestResponse: IHttpResponse;
    get<T=any,R=any>( url:string, params?:IHttpParams ): Promise<R>;
    post<T=any,R=any>( url:string, data?:any, params?:IHttpParams ): Promise<R>;
    postFile<T=any,R=any>( url:string, data:any, params?:IHttpParams ): Promise<R>;
    postJson<T=any,R=any>( url:string, json:any, params?:IHttpParams ): Promise<R>;
    put<T=any,R=any>( url:string, data?:any, params?:IHttpParams ): Promise<R>;
//    putFile<T=any,R=any>( url:string, data:FormData, opt?:any ): Promise<R>;
    putJson<T=any,R=any>( url:string, json:any, params?:IHttpParams ): Promise<R>;
    delete<T=any,R=any>( url:string, params?:IHttpParams ): Promise<R>;
    deleteJson<T=any,R=any>( url:string, json:any ): Promise<R>;
    loadScript(url: string, data?: any, params?: IHttpParams, requestName?: string): Promise<void>;
}
