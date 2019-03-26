import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmovieComponent } from '../new-movie/new-movie.component';
import { EditmovieComponent } from '../edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    NewmovieComponent,
    EditmovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewmovieComponent,
    EditmovieComponent
  ]
})
export class MovieLibraryModule { }
