import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private etatConnexion:boolean = false;

  estConnecte:BehaviorSubject<boolean>;
  estConnecte$:Observable<boolean>


  constructor() {
    this.estConnecte = new BehaviorSubject<boolean>(this.etatConnexion);
    this.estConnecte$ = this.estConnecte.asObservable();
    
  }

  
  setConnexion(etat:boolean){
    this.etatConnexion = etat;
    this.estConnecte.next(this.etatConnexion); //setter , set la nouvelle variable mavertie quelle change
  }

  statusConnexion():Observable<boolean>{
    return this.estConnecte;
  }



  getConnexion():boolean{
    return this.etatConnexion

  }
}
