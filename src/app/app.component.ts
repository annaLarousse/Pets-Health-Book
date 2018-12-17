import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pets-health-book';

  constructor() {
    const config = {
      apiKey: "AIzaSyAzcEQD_LaST4I45Ub2B3rtZ2bz6dRgZQw",
      authDomain: "pet-health-book.firebaseapp.com",
      databaseURL: "https://pet-health-book.firebaseio.com",
      projectId: "pet-health-book",
      storageBucket: "pet-health-book.appspot.com",
      messagingSenderId: "806767702879"
    };
    firebase.initializeApp(config);
  }

}
