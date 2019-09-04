import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  // ==> Uri da api (Back-End)
  uri = 'http://localhost:7071/api';

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por criar um novo 'Funcionario'
   */
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    const funcionario = {
      nomeFuncionario,
      cargo,
      numeroIdentificador
    };
    console.log(funcionario);

    // ==> (POST - Url no Back-End): http://localhost:8000/api/funcionario
    this
      .http
      .post(`${this.uri}/funcionarios`, funcionario)
      .subscribe(res => console.log('Feito'));
  }

  /**
   * Método responsável por selecionar todos os 'Funcionarios'
   */
  getFuncionarios() {
    // ==> (GET - Url no Back-End): http://localhost:8000/api/funcionarios
    return this
      .http
      .get(`${this.uri}/funcionarios`);
  }

  /**
   * Método responsável por atualizar o 'Funcionario' pelo 'Id':
   */
  editFuncionario(id) {
    // ==> (GET by Id- Url no Back-End): (GET): localhost:8000/api/funcionario/:id
    return this
      .http
      .get(`${this.uri}/funcionarios/${id}`);
  }

  atualizarFuncionario(nomeFuncionario, cargo, numeroIdentificador, id) {
    const funcionario = {
      nomeFuncionario,
      cargo,
      numeroIdentificador
    };

    // ==> (PUT by Id - Url no Back-End): (UPDATE): localhost:8000/api/funcionario/:id
    this
      .http
      .put(`${this.uri}/funcionarios/${id}`, funcionario)
      .subscribe(res => console.log('Done!'));
  }

  /**
   * Método responsável por excluir um 'Funcionario' pelo 'Id':
   */
  excluirFuncionario(id) {
    // ==> (DELETE by Id - Url no Back-End): (DELETE): localhost:8000/api/funcionario/:id
    return this
      .http
      .delete(`${this.uri}/funcionarios/${id}`);
  }
}
