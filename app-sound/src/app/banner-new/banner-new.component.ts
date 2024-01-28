import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BannerApiService } from '../banner-api.service';
import { Banner } from '../Banner';
@Component({
selector: 'app-banner-new',
templateUrl: './banner-new.component.html',
styleUrls: ['./banner-new.component.css']
})
export class BannerNewComponent {
banner=new Banner();
banners:any
errMessage:string=''
constructor(private _service: BannerApiService){
this._service.getBanners().subscribe({
next:(data)=>{this.banners=data},
error:(err)=>{this.errMessage=err}
})
}
postBanner()
  {
  this._service.postBanner(this.banner).subscribe({
  next:(data)=>{this.banners=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
