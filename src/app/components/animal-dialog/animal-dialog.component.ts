import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Animal } from 'src/app/models/animal';
import { Marking } from 'src/app/models/marking';
import { AnimalService } from 'src/app/services/animal/animal.service';

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.css']
})
export class AnimalDialogComponent implements OnInit {
  public animal: Animal;
  public marking: Marking;
  public title: string;

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

  constructor(public animalService: AnimalService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.animal = this.data.animal;
    this.marking = this.data.marking;
    this.title = this.data.title;
    
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
