import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAnimalDilogComponent } from './components/add-animal/add-animal-dilog/add-animal-dilog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalDilogComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
