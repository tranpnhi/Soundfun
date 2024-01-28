import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBanner } from './Banner';
@Injectable({
providedIn: 'root'
})
export class BannerApiService {
constructor(private _http: HttpClient) { }
getBanners():Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("http://localhost:3002/banners",requestOptions).pipe(
map(res=>JSON.parse(res) as Array<IBanner>),
retry(3),
catchError(this.handleError))
}
handleError(error:HttpErrorResponse){
return throwError(()=>new Error(error.message))
}
getBanner(id:string):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("http://localhost:3002/banners/"+id,requestOptions).pipe(
map(res=>JSON.parse(res) as IBanner),
retry(3),
catchError(this.handleError))
}
postBanner(aBanner:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.post<any>("http://localhost:3002/banners",JSON.stringify(aBanner),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<IBanner>),
retry(3),
catchError(this.handleError))
}
putBanner(aBanner:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.put<any>("http://localhost:3002/banners",JSON.stringify(aBanner),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<IBanner>),
retry(3),
catchError(this.handleError))
}
deleteBanner(id:string):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.delete<any>("http://localhost:3002/banners/"+id,requestOptions).pipe(
map(res=>JSON.parse(res) as Array<IBanner>),
retry(3),
catchError(this.handleError))
}

}
