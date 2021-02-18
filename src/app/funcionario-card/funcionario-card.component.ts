import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent  {

  @Input() funcionario: any ;

  isAdmin(){
    return this.funcionario.nome.startsWith('T') ;
  }


  getEstilosCartao(){
    return {
      'border-width' : this.funcionario.id  + 'px' ,
      'background-color': (this.funcionario.id % 2 === 0) ? 'lightblue' : 'lightgreen'
    };
  }




}
