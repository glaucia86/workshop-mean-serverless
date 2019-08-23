import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PalestranteService } from '../palestrante.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-palestrante-add',
  templateUrl: './palestrante-add.component.html',
  styleUrls: ['./palestrante-add.component.css']
})
export class PalestranteAddComponent implements OnInit {

  palestranteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private palestranteService: PalestranteService) {
    this.createForm();
  }

  createForm() {
    this.palestranteForm = this.formBuilder.group({
      nomePalestrante: ['', Validators.required],
      tituloPalestra: ['', Validators.required]
    });
  }

  adicionarPalestrante(nomePalestrante, tituloPalestra) {
    this.palestranteService.adicionarPalestrante(nomePalestrante, tituloPalestra);

    Swal.fire({
      title: 'Palestrante criado(a) com Sucesso!',
      type: 'success',
      showConfirmButton: true,
      timer: 1500
    });

    this.palestranteForm.reset();
  }

  ngOnInit() {
  }
}
