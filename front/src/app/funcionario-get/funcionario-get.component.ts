import { Component, OnInit } from '@angular/core';
import Funcionario from '../Funcionario';
import { FuncionarioService } from '../funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario-get',
  templateUrl: './funcionario-get.component.html',
  styleUrls: ['./funcionario-get.component.css']
})
export class FuncionarioGetComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((data: Funcionario[]) => {
        this.funcionarios = data;
      });
  }

  /**
   * Método responsável por excluir um 'Funcionario' pelo 'Id'
   */
  excluirFuncionario(id: any) {
    /*this.funcionarioService.excluirFuncionario(id).subscribe(res => {
      const index = this.funcionarios.indexOf(id);
      this.funcionarios.splice(index, 1);*/

    Swal.fire({
      title: 'Você tem certeza que deseja excluir o(a) Funcionário?',
      text: 'Atenção! Este Funcionário será Excluído(a)!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim. Exclua!'
    }).then((result) => {
      if (result.value === true) {
        this.funcionarioService.excluirFuncionario(id).subscribe();
        const index = this.funcionarios.indexOf(id);
        this.funcionarios.splice(index, 1);
        Swal.fire(
          'Excluído(a)!',
          'Funcionário foi excluído(a).',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado!',
          'Retornando a lista de funcionários(as)',
          'error'
        );
      }
    });
  }

}
