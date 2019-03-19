import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ratingValue: number = 0;
  searchValue: string = "";
  items: Array<any>;
  rating_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() { //initiates data retrieval and storing into result
    this.getData();
  }

  getData() { //what is used to search firebase and display movies for home, search, and filter
    this.firebaseService.getmovies() // firebase.service.ts function
    .subscribe(result => {
      this.items = result;
      this.rating_filtered_items = result;
      this.name_filtered_items = result;
    })
  }

  viewDetails(item) { // on click function for blue arrow to route to detail of doc stored on firebase
    this.router.navigate(['/details/'+ item.payload.doc.id])
  }

 // capitalizeFirstLetter(value){
 //   return value.charAt(0).toUpperCase() + value.slice(1);
 // } not needed for this project but useful

  searchByName() { // search box in html
    let value = this.searchValue.toLowerCase();
    this.firebaseService.searchmovies(value) // firebase.service.ts function
    .subscribe(result => {
      this.name_filtered_items = result;
      this.items = this.combineLists(result, this.rating_filtered_items);
    })
  }

  rangeChange(event) { // mat slider in html
    this.firebaseService.searchmoviesByRating(event.value) // firebase.service.ts function, but why is it event.value? ohhh it assigns to value based on slide event.
    .subscribe(result =>{
      this.rating_filtered_items = result;
      this.items = this.combineLists(result, this.name_filtered_items);
    })
  }

  combineLists(a, b) { // allows search by name and filter by rating to be used at same time
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }

}
