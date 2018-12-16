import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Animal } from 'src/app/models/animal';
import { Marking } from 'src/app/models/marking';

@Component({
  selector: 'app-add-animal-dilog',
  templateUrl: './add-animal-dilog.component.html',
  styleUrls: ['./add-animal-dilog.component.css']
})
export class AddAnimalDilogComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public animalFormGroup: FormGroup = new FormGroup({});
  public markingFormGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() {
    this.form.addControl('animalFormGroup', this.animalFormGroup);
    this.form.addControl('markingFormGroup', this.markingFormGroup);
  }

  /**
   * Create a new instance of Animal and Marking
   */
  public onAddAnimal(): void {

    let newAnimal: Animal = new Animal();
    let newMarking: Marking = new Marking();

    newAnimal.Name = this.animalFormGroup.controls.name.value;
    newAnimal.Specie = this.animalFormGroup.controls.specie.value;
    newAnimal.Sex = this.animalFormGroup.controls.sex.value;
    newAnimal.BirthDate = this.animalFormGroup.controls.birthDate.value;
    newAnimal.Breed = this.animalFormGroup.controls.breed.value;
    newAnimal.Color = this.animalFormGroup.controls.color.value;
    newAnimal.Allergies = this.animalFormGroup.controls.allergies.value;
    newAnimal.IsSterilized = this.animalFormGroup.controls.isSterilized.value;
    if (newAnimal.IsSterilized) { newAnimal.SterilizedDate = this.animalFormGroup.controls.sterilizedDate.value; }

    newMarking.TransponderCode = this.markingFormGroup.controls.transponderCode.value;
    newMarking.TransponderDate = this.markingFormGroup.controls.transponderDate.value;
    newMarking.TransponderLocation = this.markingFormGroup.controls.transponderLocation.value;
    newMarking.TattooCode = this.markingFormGroup.controls.tattooCode.value;
    newMarking.TattoDate = this.markingFormGroup.controls.tattoDate.value;
    newMarking.TattooLocation = this.markingFormGroup.controls.tattooLocation.value;

    newAnimal.Marking = newMarking;
  }
}
