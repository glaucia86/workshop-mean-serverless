import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalestranteAddComponent } from './palestrante-add/palestrante-add.component';
import { PalestranteGetComponent } from './palestrante-get/palestrante-get.component';
import { PalestranteEditComponent } from './palestrante-edit/palestrante-edit.component';
import { PalestranteService } from './palestrante.service';

@NgModule({
  declarations: [
    AppComponent,
    PalestranteAddComponent,
    PalestranteGetComponent,
    PalestranteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ PalestranteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
