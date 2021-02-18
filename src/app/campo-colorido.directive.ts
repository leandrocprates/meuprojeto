import { Directive,  HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {


  @Input() cor = 'pink';
  @HostBinding('style.backgroundColor') corDeFundo: string ;



  @HostListener('focus') colorir(){
    this.corDeFundo = this.cor ;
  }

  @HostListener('blur') descolorir(){
    this.corDeFundo = 'transparent';
  }




}
