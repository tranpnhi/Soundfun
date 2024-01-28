import { Component } from '@angular/core';
import { BannerApiService } from '../banner-api.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-banners-admin',
templateUrl: './banners-admin.component.html',
styleUrls: ['./banners-admin.component.css']
})
export class BannersAdminComponent {
banners:any;
errMessage:string=''
constructor(private _service: BannerApiService, pservice: BannerApiService,private router:Router){
this._service.getBanners().subscribe({
next:(data)=>{this.banners=data},
error:(err)=>{this.errMessage=err}
})
}
deleteBanner(id:any)
{
    if(confirm("Are you sure to delete "+id)){
    this._service.deleteBanner(id).subscribe({
    next:(data)=>{this.banners=data},
    error:(err)=>{this.errMessage=err}
    })
    }
}
viewDetail(id:any)
{
    this._service.getBanner(id).subscribe({
    next:(data)=>{this.banners=data},
    error:(err)=>{this.errMessage=err}
    })
}
}
