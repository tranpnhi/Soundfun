import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ISound } from './Sound';
@Injectable({
providedIn: 'root'
})
export class SoundApiService {
constructor(private _http: HttpClient) { }
getSounds():Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("http://localhost:3002/sounds",requestOptions).pipe(
map(res=>JSON.parse(res) as Array<ISound>),
retry(3),
catchError(this.handleError))
}
handleError(error:HttpErrorResponse){
return throwError(()=>new Error(error.message))
}
getSound(id:string):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("http://localhost:3002/sounds/"+id,requestOptions).pipe(
map(res=>JSON.parse(res) as ISound),
retry(3),
catchError(this.handleError))
}

getSoundGenre(genre:string):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("http://localhost:3002/genres/"+genre,requestOptions).pipe(
map(res=>JSON.parse(res) as ISound),
retry(3),
catchError(this.handleError))
}

postSound(aSound:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.post<any>("http://localhost:3002/sounds",JSON.stringify(aSound),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<ISound>),
retry(3),
catchError(this.handleError))
}
putSound(aSound:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.put<any>("http://localhost:3002/sounds",JSON.stringify(aSound),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<ISound>),
retry(3),
catchError(this.handleError))
}
deleteSound(id:string):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.delete<any>("http://localhost:3002/sounds/"+id,requestOptions).pipe(
map(res=>JSON.parse(res) as Array<ISound>),
retry(3),
catchError(this.handleError))
}

}
