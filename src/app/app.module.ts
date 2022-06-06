import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopSongsComponent } from './top-songs/top-songs.component';
import { AddSongComponent } from './add-song/add-song.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ngx-bootstrap/rating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopSongsComponent,
    AddSongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule.forRoot(),
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AddSongComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
