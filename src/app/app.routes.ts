import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewmovieComponent } from './new-movie/new-movie.component';
import { EditmovieComponent } from './edit-movie/edit-movie.component';
import { EditmovieResolver } from './edit-movie/edit-movie.resolver';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent }, // this is the first page loaded when doing ng serve --open
  { path: 'home', component: HomeComponent }, // 'home' is what is shown on the URL
  { path: 'new-movie', component: NewmovieComponent }, // can also include child paths by adding , children: [{ path... }]
  { path: 'details/:id', component: EditmovieComponent, resolve:{data : EditmovieResolver} }
];
