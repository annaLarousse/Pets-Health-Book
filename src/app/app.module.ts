import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { AnimalDialogComponent } from './components/animal-dialog/animal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDialogComponent,
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
    AnimalDialogComponent
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
