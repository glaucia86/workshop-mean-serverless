import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioAddComponent } from './funcionario-add/funcionario-add.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FuncionarioGetComponent } from './funcionario-get/funcionario-get.component';

const routes: Routes = [
  { path: 'funcionario/create', component: FuncionarioAddComponent },
  { path: 'funcionario/:id', component: FuncionarioEditComponent },
  { path: 'funcionario', component: FuncionarioGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
