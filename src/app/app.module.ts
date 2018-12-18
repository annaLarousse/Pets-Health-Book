import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddAnimalDilogComponent } from './components/add-animal/add-animal-dilog/add-animal-dilog.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalDilogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AddAnimalDilogComponent
  ],
})
export class AppModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        /* ArielUiTranslateService,
        GoogleMapsConfigService, */
      ]
    };
  }
}
