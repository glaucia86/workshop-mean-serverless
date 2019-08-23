import { Component, OnInit } from '@angular/core';
import Palestrante from '../Palestrante';
import { PalestranteService } from '../palestrante.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-palestrante-get',
  templateUrl: './palestrante-get.component.html',
  styleUrls: ['./palestrante-get.component.css']
})
export class PalestranteGetComponent implements OnInit {

  palestrantes: Palestrante[];

  constructor(private palestranteService: PalestranteService) { }

  ngOnInit() {
    this.palestranteService
      .getPalestrantes()
      .subscribe((data: Palestrante[]) => {
        this.palestrantes = data;
    });
  }

  /**
   * Método responsável por excluir um 'Palestrante' pelo 'Id'
   */
  excluirPalestrante(id: any) {
    this.palestranteService.excluirPalestrante(id).subscribe(res => {
      const index = this.palestrantes.indexOf(id);
      this.palestrantes.splice(index, 1);

      Swal.fire({
        title: 'Você tem certeza que deseja excluir o(a) Palestrante?',
        text: 'Atenção! Este(a) Palestrante será Excluído(a)!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim. Exclua!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Excluído(a)!',
            'Palestrante foi excluído(a).',
            'success'
          );
        }
      });
    });
  }

}
