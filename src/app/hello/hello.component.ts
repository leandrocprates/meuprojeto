import { Component } from '@angular/core';


@Component({
    selector : 'algaworks-hello' ,
    template : `
    <h2>
            Hello {{nome}}
    </h2>
    `

})

export class HelloComponent {
    nome = 'Leandro teste Hello component ' ;
}
