import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Recipts';
  loadedFeature: string = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "recipes-book-48de8.firebaseapp.com",
      databaseURL: "https://recipes-book-48de8.firebaseio.com/",
      projectId: "recipes-book-48de8"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;

  }


}
