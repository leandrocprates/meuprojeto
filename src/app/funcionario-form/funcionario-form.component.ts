import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  nome = 'Leandro';
  adicionado = false ;
  idIncremento = 0 ;

  @Output() funcionarioEvento = new EventEmitter();


  adicionar() {
    this.adicionado = true ;
    const funcionario = {
      id : ++this.idIncremento,
      nome : this.nome
    };

    this.funcionarioEvento.emit(funcionario);


  }



}
