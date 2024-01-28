import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SoundApiService } from 'src/app/sound-api.service';
import { HttpClient, HttpEventType } from '@angular/common/http'; 
import {  Input } from '@angular/core'; 
import { finalize, Subscription } from 'rxjs'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
sounds:any;
errMessage:string=''
constructor(private _service: SoundApiService, pservice: SoundApiService,private router:Router,  private http: HttpClient){
this._service.getSounds().subscribe({
next:(data)=>{this.sounds=data},
error:(err)=>{this.errMessage=err}
})

}
logOut() {
  sessionStorage.clear();
  this.router.navigate(['login']);
}
deleteSound(id:any)
{
    if(confirm("Are you sure to delete "+id)){
this._service.deleteSound(id).subscribe({
next:(data)=>{this.sounds=data},
error:(err)=>{this.errMessage=err}
})
    }

}
viewDetail(id:any)
{
    this._service.getSound(id).subscribe({
        next:(data)=>{this.sounds=data},
        error:(err)=>{this.errMessage=err}
        })
}

}