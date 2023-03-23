import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class Cliente{
  nome: String;
  email: String;
  profissaoId: Int16Array;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faCoffee = faCoffee;
  faThumbsUp = faThumbsUp ; 

  cliente = new Cliente();

  funcionarios = [] ;

  profissoes = [  {  id : '1' , nome : 'Engenheiro' }  ,
                  {  id : '2' , nome : 'Dentista' }  ,
                  {  id : '3' , nome : 'Programador' }  ,
                  {  id : '4' , nome : 'Outras' }
               ];


               blue='red';


  aoAdicionar(funcionario){
    this.funcionarios.push(funcionario);
  }

  salvar(form: NgForm ){
      console.log(form);
      console.log(form.value.nome);
      console.log('salvando....');
      form.reset({profissao: ''});
  }


  public likes : number = 0 ; 
  public like(): void {
      this.likes++ ; 
  }

}
