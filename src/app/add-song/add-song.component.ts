import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { songModel } from './add-song.model';
import { ApiService } from '../shared/api.service';
import { artistModel } from './artist.model';




@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  closeResult = '';
  
  formValue !: FormGroup;
  addSongModelObj: songModel = new songModel();

  formArtist !: FormGroup;
  artistModelObj : artistModel = new artistModel();
  artistData !: any;


  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private api: ApiService ) { }



  ngOnInit(): void {

    this.getArtistDetails();


    this.formValue = this.formBuilder.group({
      songName: [''],
      artistName: [''],
      artwork: [''],
      releaseDate: [''],
      rating: ['']

    })

    this.formArtist = this.formBuilder.group({
      nameArtist : [''],
      dobArtist : [''],
      bioArtist : ['']
    })


  }

  postSongDetails(){
    this.addSongModelObj.songName = this.formValue.value.songName;
    this.addSongModelObj.artistName = this.formValue.value.artistName;
    this.addSongModelObj.releaseDate = this.formValue.value.releaseDate;
    this.addSongModelObj.artwork = this.formValue.value.artwork;
    this.addSongModelObj.rating = this.formValue.value.rating;

    this.api.postSong(this.addSongModelObj)
    .subscribe(res=>{
      console.log(res)
        alert("song added succesfully")
        this.formValue.reset()
      },
      err=>{
        alert("song addition failed")
      })
    
  }

  postArtistDetails(){
    this.artistModelObj.nameArtist = this.formArtist.value.nameArtist;
    this.artistModelObj.dobArtist = this.formArtist.value.dobArtist;
    this.artistModelObj.bioArtist = this.formArtist.value.bioArtist;
    

    this.api.postArtist(this.artistModelObj)
    .subscribe(res=>{
      console.log(res)
        alert("artist added succesfully")
        this.formArtist.reset()
      },
      err=>{
        alert("artist addition failed")
      })
    
  }

  getArtistDetails(){
    console.log(this.artistData)
    this.api.getArtist()
    .subscribe(res=>{
      this.artistData = res;
    })
  }
  

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  max = 5;
  rate = 0;
  isReadonly = false;

  

 
}