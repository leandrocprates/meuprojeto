import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testa geracao de id ', () => {
    const id = service.generateIdsWithPrefix('alura-') ;
    expect(id.startsWith("alura-")).toBeTrue();
  });

  it('testa se gera ids nao duplicados ', () => {
    const ids = new Set();
    for(let i=0;i<50;i++ ){
      ids.add(service.generateIdsWithPrefix('alura-'));
    }
    expect(ids.size).toBe(50);
  });


  it('testa quantidade de ids gerados', () => {
    const ids = new Set();
    for(let i=0;i<2;i++ ){
      ids.add(service.generateIdsWithPrefix('alura-'));
    }
    expect(service.getNumberOfGenerateIds()).toBe(2);
  });


  it('testar excecao ao criar ids', () => {
    const emptyValues = [null,'',undefined,'0','1'] ; 
    emptyValues.forEach(valor=>{
      expect(()=>service.generateIdsWithPrefix(valor)).withContext(`Valor usado : ${valor}`).toThrowError();
    });
  });

  

});
