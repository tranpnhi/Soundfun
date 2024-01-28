import { Component } from '@angular/core';
import { SoundApiService } from '../sound-api.service';
@Component({
  selector: 'app-sound-search-id',
  templateUrl: './sound-search-id.component.html',
  styleUrls: ['./sound-search-id.component.css']
})
export class SoundSearchIdComponent{
  errMessage:string=''
  constructor(private _service: SoundApiService){}

  sound:any
  searchSound(id:string)
  {
    this._service.getSound(id).subscribe({
    next:(data)=>{this.sound=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  deleteSound(id:any)
  {
    if(confirm("Are you sure to delete "+id)){
    this._service.deleteSound(id).subscribe({
    next:(data)=>{this.sound=data},
    error:(err)=>{this.errMessage=err}
    })}
  }
}
