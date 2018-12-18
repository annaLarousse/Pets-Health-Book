import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule
}
    from '@angular/material';

const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class AngularMaterialModule { }
