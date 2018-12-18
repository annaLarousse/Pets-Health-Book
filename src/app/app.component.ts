import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { MatDialogConfig, MatDialogRef, MatDialog } from '@angular/material';
import { Animal } from './models/animal';
import { Marking } from './models/marking';
import { AddAnimalDilogComponent } from './components/add-animal/add-animal-dilog/add-animal-dilog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pets-health-book';

  public dialogRef: MatDialogRef<AddAnimalDilogComponent>;

  constructor(public dialog: MatDialog) {
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

   /**
   * Open a Dialog to Add a new Animal and a new Marking linked to the animal
   */
  public addNewAnimal(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height= '400px';
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      animal: {} as Animal,
      marking: {} as Marking,
      title: 'Ajouter un nouvel animal',
    };

    this.dialogRef = this.dialog.open(AddAnimalDilogComponent, dialogConfig);

  }

}
