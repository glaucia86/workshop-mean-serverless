import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.css']
})
export class FuncionarioEditComponent implements OnInit {

  funcionarioForm: FormGroup;
  funcionario: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private funcionarioService: FuncionarioService,
              private formBuilder: FormBuilder) {
                this.createForm();
  }

  createForm() {
    this.funcionarioForm = this.formBuilder.group({
      nomeFuncionario: ['', Validators.required],
      cargo: ['', Validators.required],
      numeroIdentificador: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.funcionarioService.editFuncionario(params.id).subscribe(res => {
        this.funcionario = res;
      });
    });
  }

  /**
   * Método responsável por atualizar o 'Funcionario'
   */
  atualizarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    this.route.params.subscribe(params => {
      this.funcionarioService.atualizarFuncionario(nomeFuncionario, cargo, numeroIdentificador, params.id);
      // ==> Depois que clicar no botão 'Atualizar' redirecionar para a lista de Funcionarios
      this.router.navigate(['funcionario']);

      Swal.fire({
        title: 'Funcionário atualizado(a) com Sucesso!',
        type: 'success',
        showConfirmButton: true,
        timer: 1500
      });
    });
  }

}
