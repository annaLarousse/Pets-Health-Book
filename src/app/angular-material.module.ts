import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
}
    from '@angular/material';

const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class AngularMaterialModule { }
