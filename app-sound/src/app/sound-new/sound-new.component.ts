import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SoundApiService } from '../sound-api.service';
import { Sound } from '../Sound';
@Component({
  selector: 'app-sound-new',
  templateUrl: './sound-new.component.html',
  styleUrls: ['./sound-new.component.css']
})
export class SoundNewComponent {
sound=new Sound();
sounds:any
errMessage:string=''
constructor(private _service: SoundApiService){
this._service.getSounds().subscribe({
next:(data)=>{this.sounds=data},
error:(err)=>{this.errMessage=err}
})
}
postSound()
  {
    this._service.postSound(this.sound).subscribe({
    next:(data)=>{this.sounds=data},
    error:(err)=>{this.errMessage=err}
    })
  }
}
