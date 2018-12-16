import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalDilogComponent } from './add-animal-dilog.component';

describe('AddAnimalDilogComponent', () => {
  let component: AddAnimalDilogComponent;
  let fixture: ComponentFixture<AddAnimalDilogComponent>;

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

/*   it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onclick() should toggle #isOn', () => {
    expect(component.isOn).toBe(false, 'Off at first');
    component.onClick();
    expect(component.isOn).toBe(true, 'on after click');
    component.onClick();
    expect(component.isOn).toBe(false, 'off after second click');

  });

  it('#onClick() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i, 'off at first');
    component.onClick();
    expect(component.message).toMatch(/is on/i, 'on after clicked');
  }); */
});
