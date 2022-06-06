import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component'
import { AppComponent } from './app.component';
import { TopSongsComponent} from './top-songs/top-songs.component'


const routes: Routes = [
  {path: '', component: TopSongsComponent },
  {path: 'addSong', component: AddSongComponent},
  {path: 'search/searchTerm', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
