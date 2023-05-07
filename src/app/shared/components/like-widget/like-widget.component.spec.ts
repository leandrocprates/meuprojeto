import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('LikeWidgetComponent', () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      imports: [FontAwesomeModule],      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();//chama ngOnInit()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('validar se id diferente de null ao criar objeto ', () => {
    expect(component.id).toBeTruthy();
  });


  it('testes component output 1 ', done => {
      component.liked.subscribe(() => {
        expect(true).toBeTrue();
        done(); //informa que completou execucao do metodo 
      });
      component.like();//quando chama o metodo like , executa o output acima
  });


  it('testes component output 2  ', () => {
    spyOn(component.liked, 'emit');//espiona esse metodo 
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
