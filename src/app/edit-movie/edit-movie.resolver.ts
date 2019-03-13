import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class EditmovieResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let movieId = route.paramMap.get('id');
      this.firebaseService.getmovie(movieId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
