import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PalestranteService } from '../palestrante.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-palestrante-edit',
  templateUrl: './palestrante-edit.component.html',
  styleUrls: ['./palestrante-edit.component.css']
})
export class PalestranteEditComponent implements OnInit {

  palestranteForm: FormGroup;
  palestrante: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private palestranteService: PalestranteService,
              private formBuilder: FormBuilder) {
                this.createForm();
  }

  createForm() {
    this.palestranteForm = this.formBuilder.group({
      nomePalestrante: ['', Validators.required],
      tituloPalestra: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.palestranteService.editPalestrante(params.id).subscribe(res => {
        this.palestrante = res;
      });
    });
  }

  /**
   * Método responsável por atualizar o 'Palestrante'
   */
  atualizarPalestrante(nomePalestrante, tituloPalestra, id) {
    this.route.params.subscribe(params => {
      this.palestranteService.atualizarPalestrante(nomePalestrante, tituloPalestra, params.id);
      // ==> Depois que clicar no botão 'Atualizar' redirecionar para a lista de Palestrantes
      this.router.navigate(['palestrante']);

      Swal.fire({
        title: 'Palestrante atualizado(a) com Sucesso!',
        type: 'success',
        showConfirmButton: true,
        timer: 1500
      });
    });
  }

}
