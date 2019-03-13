import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewmovieComponent implements OnInit {

  exampleForm: FormGroup;


  validation_messages = {
   'name': [
     { type: 'required', message: 'Name is required.' }
   ],
   'genre': [
     { type: 'required', message: 'Genre is required.' }
   ],
   'rating': [
     { type: 'required', message: 'Rating is required.' }
   ],
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required ],
      genre: ['', Validators.required ],
      rating: ['', Validators.required ]
    });
  }


  resetFields(){
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createmovie(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }

}
