import { Component } from '@angular/core';
import { SoundApiService } from '../sound-api.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-sounds-admin',
templateUrl: './sounds-admin.component.html',
styleUrls: ['./sounds-admin.component.css']
})
export class SoundsAdminComponent {
sounds:any;
errMessage:string=''
constructor(private _service: SoundApiService){
this._service.getSounds().subscribe({
next:(data)=>{this.sounds=data},
error:(err)=>{this.errMessage=err}
})
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
// viewDetail(f:any)
// {
// this.router.navigate(['books',f.bookId])
// }
}
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from '../product.service';
// @Component({
// selector: 'app-service-product-image-event',
// templateUrl: './service-product-image-event.component.html',
// styleUrls: ['./service-product-image-event.component.css']
// })
// export class ServiceProductImageEventComponent {
// public products:any
// constructor(pservice: ProductService,private router:Router){
// this.products=pservice.getProductsWithImages()
// }
// viewDetail(f:any)
// {
// this.router.navigate(['service-product-image-event',f.ProductId])
// }
// }
