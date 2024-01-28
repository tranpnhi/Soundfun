import { Component, OnInit } from '@angular/core';
import { SoundApiService } from '../sound-api.service';
@Component({
  selector: 'app-sound-search-genre',
  templateUrl: './sound-search-genre.component.html',
  styleUrls: ['./sound-search-genre.component.css']
})
export class SoundSearchGenreComponent {

  errMessage:string=''
  constructor(private _service: SoundApiService){}

  sound:any
  searchSound(genre:string)
  {
    this._service.getSound(genre).subscribe({
    next:(data)=>{this.sound=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  
}
