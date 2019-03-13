import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(public db: AngularFirestore) {}

 createmovie(value){
    return this.db.collection('movies').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      genre: value.genre,
      rating: parseInt(value.rating),

    });
  }

  getmovie(movieKey){
    return this.db.collection('movies').doc(movieKey).snapshotChanges();
  }

  getmovies(){
    return this.db.collection('movies').snapshotChanges();
  }

  updatemovie(movieKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('movies').doc(movieKey).set(value);
  }

  deletemovie(movieKey){
    return this.db.collection('movies').doc(movieKey).delete();
  }

  searchmovies(searchValue){
    return this.db.collection('movies',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchmoviesByRating(value){
    return this.db.collection('movies',ref => ref.orderBy('rating').startAt(value)).snapshotChanges();
  }

}
