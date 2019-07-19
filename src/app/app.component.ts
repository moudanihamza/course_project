import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'course-project';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: 'AIzaSyAoYNqY0W1J05xSOGM3Pa9buWX6ejDoyY4',
    authDomain: 'ng-recipe-book-8316e.firebaseapp.com',
   });
  }
}

