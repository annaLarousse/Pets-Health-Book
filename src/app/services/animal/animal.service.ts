import { Injectable } from '@angular/core';

import { Animal } from 'src/app/models/animal';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  public addAnimal(animal: Animal): void {
    firebase.database().ref('/animals').set(animal);

  }
}
