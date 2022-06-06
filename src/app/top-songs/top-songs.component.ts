import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent implements OnInit {

  constructor( private api: ApiService ) { }

  public term:any;

  ngOnInit(): void {
    this.getSongData()
    
  }

  songData !: any

  getSongData(){
    this.api.getSong()
    .subscribe(res=>{
      this.songData = res;
    })
  }

  deleteSongData(row: any){
    this.api.deleteSong(row.id)
    .subscribe(res=>{
      alert("song deleted!");
      this.getSongData()
    })
  }

  max = 5;
  rate = 0 ;
  isReadonly = false;



}
