import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  private numberOfGenerateIds = 0 ; 

  private validIdRegex= /^[A-Za-z]+[\w\-\:\.]*$/ ; 

  constructor() { }

  public getNumberOfGenerateIds(): number{
      return this.numberOfGenerateIds;
  }


  public generateIdsWithPrefix(prefix : string): string {
    if (!prefix || !this.validIdRegex.test(prefix) ){
      throw Error('Nao passou o prefixo ou invalido '); 
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`; 
  }

  private generateUniqueId() : string {
      return uuidv4();
  }

}
