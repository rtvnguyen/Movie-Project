import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(public db: AngularFirestore) {}


  getmovies(){ // used in home.component.ts
    return this.db.collection('movies').snapshotChanges();
  }

  searchmovies(searchValue){ // used in home.component.ts
    return this.db.collection('movies',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchmoviesByRating(value){ // used in home.component.ts
    return this.db.collection('movies',ref => ref.orderBy('rating').startAt(value)).snapshotChanges();
  }

  updatemovie(movieKey, value){ // used in edit-movie.component.ts
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('movies').doc(movieKey).set(value);
  }

  deletemovie(movieKey){ // used in edit-movie.component.ts
    return this.db.collection('movies').doc(movieKey).delete();
  }

  getmovie(movieKey){ // used in edit-movie.resolver.ts
    return this.db.collection('movies').doc(movieKey).snapshotChanges();
  }

  createmovie(value){ // used in new-movie.component.ts
    return this.db.collection('movies').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      genre: value.genre,
      rating: parseInt(value.rating),
    });
  }

}
