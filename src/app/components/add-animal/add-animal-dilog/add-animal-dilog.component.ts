import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Animal } from 'src/app/models/animal';
import { Marking } from 'src/app/models/marking';
import { AnimalService } from 'src/app/services/animal/animal.service';

@Component({
  selector: 'app-add-animal-dilog',
  templateUrl: './add-animal-dilog.component.html',
  styleUrls: ['./add-animal-dilog.component.css']
})
export class AddAnimalDilogComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public animalFormGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    specie: new FormControl(),
    sex: new FormControl(),
    birthDate: new FormControl(),
    breed: new FormControl(),
    color: new FormControl(),
    allergies: new FormControl(),
    isSterilized: new FormControl(),
    sterilizedDate: new FormControl(),
  });
  public markingFormGroup: FormGroup = new FormGroup({
    transponderCode: new FormControl(),
    transponderDate: new FormControl(),
    transponderLocation: new FormControl(),
    tattooCode: new FormControl(),
    tattoDate: new FormControl(),
    tattooLocation: new FormControl(),
  });

  public newAnimal: Animal;
  public newMarking: Marking;

  constructor(public animalService: AnimalService) { }

  ngOnInit() {
    this.form.addControl('animalFormGroup', this.animalFormGroup);
    this.form.addControl('markingFormGroup', this.markingFormGroup);
  }

  /**
   * Create a new instance of Animal
   */
  public onAddAnimal(): void {
    this.newAnimal = {
      Name: this.animalFormGroup.controls.name.value,
      Specie: this.animalFormGroup.controls.specie.value,
      Sex: this.animalFormGroup.controls.sex.value,
      BirthDate: this.animalFormGroup.controls.birthDate.value,
      Breed: this.animalFormGroup.controls.breed.value,
      Color: this.animalFormGroup.controls.color.value,
      Allergies: this.animalFormGroup.controls.allergies.value,
      IsSterilized: this.animalFormGroup.controls.isSterilized.value,
    };

    if (this.newAnimal.IsSterilized) { this.newAnimal.SterilizedDate = this.animalFormGroup.controls.sterilizedDate.value; }
  }

  /**
   * Create a new instance of Marking
   */
  public onAddMarking(): void {
    this.newMarking = {
      TransponderCode: this.markingFormGroup.controls.transponderCode.value,
      TransponderDate: this.markingFormGroup.controls.transponderDate.value,
      TransponderLocation: this.markingFormGroup.controls.transponderLocation.value,
      TattooCode: this.markingFormGroup.controls.tattooCode.value,
      TattoDate: this.markingFormGroup.controls.tattoDate.value,
      TattooLocation: this.markingFormGroup.controls.tattooLocation.value,
    };
  }

  /**
   * Submit form to create a new Animal and a new Marking
   * Will link the MArking to the Animal
   */
  public onSubmit(): void {

    if (this.animalFormGroup.invalid || this.markingFormGroup.invalid) {
      return;
    }

    this.onAddAnimal();
    this.onAddMarking();
    this.newAnimal.Marking = this.newMarking;

    this.animalService.addAnimal(this.newAnimal);
  }
}
