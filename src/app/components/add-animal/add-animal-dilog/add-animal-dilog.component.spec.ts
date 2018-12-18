import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as firebase from 'firebase';

import { AddAnimalDilogComponent } from './add-animal-dilog.component';

describe('AddAnimalDilogComponent', () => {
  let component: AddAnimalDilogComponent;
  let fixture: ComponentFixture<AddAnimalDilogComponent>;

  const config = {
    apiKey: "AIzaSyAzcEQD_LaST4I45Ub2B3rtZ2bz6dRgZQw",
    authDomain: "pet-health-book.firebaseapp.com",
    databaseURL: "https://pet-health-book.firebaseio.com",
    projectId: "pet-health-book",
    storageBucket: "pet-health-book.appspot.com",
    messagingSenderId: "806767702879"
  };
  firebase.initializeApp(config);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnimalDilogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#onAddAnimal() should create a new Animal', () => {
    expect(component.newAnimal).toBeUndefined();

    component.animalFormGroup.controls.name.setValue('Leo');
    component.animalFormGroup.controls.specie.setValue('cat');
    component.animalFormGroup.controls.sex.setValue('male');
    component.animalFormGroup.controls.birthDate.setValue('2015-08-01');
    component.animalFormGroup.controls.breed.setValue('European');
    component.animalFormGroup.controls.color.setValue('Brown Tabby');
    component.animalFormGroup.controls.allergies.setValue('none');
    component.animalFormGroup.controls.isSterilized.setValue(true);
    component.animalFormGroup.controls.sterilizedDate.setValue('2015-08-01');

    component.onAddAnimal();

    expect(component.newAnimal).toEqual({
      Name: 'Leo',
      Specie: 'cat',
      Sex: 'male',
      BirthDate: '2015-08-01',
      Breed: 'European',
      Color: 'Brown Tabby',
      Allergies: 'none',
      IsSterilized: true,
      SterilizedDate: '2015-08-01',
    });
  });

  it('#onAddMarking() should create a new Marking', () => {
    expect(component.newMarking).toBeUndefined();

    component.markingFormGroup.controls.transponderCode.setValue('25026653458');
    component.markingFormGroup.controls.transponderDate.setValue('2017-12-16');
    component.markingFormGroup.controls.transponderLocation.setValue('GJG');
    component.markingFormGroup.controls.tattooCode.setValue('191 NXV');
    component.markingFormGroup.controls.tattoDate.setValue('2016-11-15');
    component.markingFormGroup.controls.tattooLocation.setValue('Oreille Droite');

    component.onAddMarking();

    expect(component.newMarking).toEqual({
      TransponderCode: '25026653458',
      TransponderDate: '2017-12-16',
      TransponderLocation: 'GJG',
      TattooCode: '191 NXV',
      TattoDate: '2016-11-15',
      TattooLocation: 'Oreille Droite',
    })
  })

  it('#onSubmit() should create new Animal and Marking and link those two', () => {


    component.newMarking = {
      TransponderCode: '25026653458',
      TransponderDate: new Date('2017-12-16'),
      TransponderLocation: 'GJG',
      TattooCode: '191 NXV',
      TattoDate: new Date('2016-11-15'),
      TattooLocation: 'Oreille Droite',
    }; 

    component.newAnimal = {
      Name: 'Leo',
      Specie: 'cat',
      Sex: 'male',
      BirthDate: new Date('2015-08-01'),
      Breed: 'European',
      Color: 'Brown Tabby',
      Allergies: 'none',
      IsSterilized: true,
      SterilizedDate: new Date('2015-08-01'),
    }
    expect(component.newAnimal.Marking).toBeUndefined();
    component.onSubmit();
    expect(component.newAnimal.Marking).toBe(component.newMarking);
  })
});
