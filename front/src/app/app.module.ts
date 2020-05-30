import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { FuncionarioAddComponent } from './funcionario-add/funcionario-add.component';
import { FuncionarioGetComponent } from './funcionario-get/funcionario-get.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FuncionarioService } from './funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioAddComponent,
    FuncionarioGetComponent,
    FuncionarioEditComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ FuncionarioService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(faEdit, faTrash, faUserPlus);
  }
}
