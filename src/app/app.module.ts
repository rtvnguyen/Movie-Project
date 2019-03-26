import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'; // adding hammer gesture config and gesture config AND importing hammerjs in polyfills.ts made mat slider draggable
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //added to try and get drop down to work

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { EditmovieComponent } from './edit-movie/edit-movie.component';
import { EditmovieResolver } from './edit-movie/edit-movie.resolver';
import { NewmovieComponent } from './new-movie/new-movie.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added to get mat-slider to work
import { MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule, GestureConfig, MatNativeDateModule, MatSelectModule } from '@angular/material'; //added matnativemodule to try and get dropdown to work


@NgModule({
  declarations: [
    AppComponent,
    EditmovieComponent,
    NewmovieComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    FirebaseService, 
    EditmovieResolver,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }, // adding hammer gesture config and gesture config AND importing hammerjs in polyfills.ts made mat slider draggable
  ],

  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule); //maybe not needed?