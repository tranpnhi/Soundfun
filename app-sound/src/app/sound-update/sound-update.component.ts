import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SoundApiService } from '../sound-api.service';
import { Sound } from '../Sound';
import { EventEmitter, Input, Output } from '@angular/core';
@Component({
 selector: 'app-sound-update',
 templateUrl: './sound-update.component.html',
 styleUrls: ['./sound-update.component.css']
})
export class SoundUpdateComponent {

sound=new Sound();
sounds:any
errMessage:string=''
constructor(private _service: SoundApiService){
this._service.getSounds().subscribe({
next:(data)=>{this.sounds=data},
error:(err)=>{this.errMessage=err}
})
}

putSound()
{
    this._service.putSound(this.sound).subscribe({
    next:(data)=>{this.sounds=data},
    error:(err)=>{this.errMessage=err}
    })
}
}