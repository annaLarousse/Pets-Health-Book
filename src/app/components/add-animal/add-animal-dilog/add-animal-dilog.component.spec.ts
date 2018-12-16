import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalDilogComponent } from './add-animal-dilog.component';

describe('AddAnimalDilogComponent', () => {
  let component: AddAnimalDilogComponent;
  let fixture: ComponentFixture<AddAnimalDilogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimalDilogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
