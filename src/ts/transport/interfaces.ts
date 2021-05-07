export type IHttpParams = {};

//-------------------------------------
export interface IHttp {
//-------------------------------------
    get<T=any,R=any>( url:string, params?:IHttpParams ): Promise<R>;
    post<T=any,R=any>( url:string, data?:any, params?:IHttpParams ): Promise<R>;
    postFile<T=any,R=any>( url:string, data:any, params?:IHttpParams ): Promise<R>;
    postJson<T=any,R=any>( url:string, json:any, params?:IHttpParams ): Promise<R>;
    put<T=any,R=any>( url:string, data?:any, params?:IHttpParams ): Promise<R>;
//    putFile<T=any,R=any>( url:string, data:FormData, opt?:any ): Promise<R>;
    putJson<T=any,R=any>( url:string, json:any, params?:IHttpParams ): Promise<R>;
    delete<T=any,R=any>( url:string, params?:IHttpParams ): Promise<R>;
    deleteJson<T=any,R=any>( url:string, json:any ): Promise<R>;
}

//-------------------------------------
export abstract class TransportFrameworkFactory {
//-------------------------------------
      static instance: ITransportFramework;
}
    
//-------------------------------------
export interface ITransportFramework {
//-------------------------------------
    http:IHttp;
    newHttpInstance( params?:IHttpParams ):IHttp;
}