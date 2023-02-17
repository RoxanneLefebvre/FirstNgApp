import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private etatConnexion:boolean = false;
  

  constructor() {
    
   }

   setConnexion(etat:boolean){
    this.etatConnexion = etat;
  }



  getConnexion():boolean{
    return this.etatConnexion

  }
}
