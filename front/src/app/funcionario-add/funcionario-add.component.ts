import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario-add',
  templateUrl: './funcionario-add.component.html',
  styleUrls: ['./funcionario-add.component.css']
})
export class FuncionarioAddComponent implements OnInit {

  funcionarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) {
    this.createForm();
  }

  createForm() {
    this.funcionarioForm = this.formBuilder.group({
      nomeFuncionario: ['', Validators.required],
      cargo: ['', Validators.required],
      numeroIdentificador: ['', Validators.required]
    });
  }

  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    this.funcionarioService.adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador);

    Swal.fire({
      title: 'Funcionário criado(a) com Sucesso!',
      type: 'success',
      showConfirmButton: true,
      timer: 1500
    });

    this.funcionarioForm.reset();
  }

  ngOnInit() {
  }
}
