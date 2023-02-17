import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})

export class EnteteComponent {
  titre:String = "Administration"
  msgConnecter:string = "Se connecter"
  estConnecter:boolean = false;

  constructor(private authServ:AuthService){
    console.log(authServ);
    this.estConnecter = this.authServ.etatConnexion;
    
    

  }

  seConnecter(){
    this.estConnecter = !this.estConnecter;
    this.authServ.etatConnexion =this.estConnecter;
    if(this.estConnecter){
      this.msgConnecter = "Se deconnecter";
    }else{
      this.msgConnecter = "Se connecter";
    }
    console.log(this.authServ);
  }
}
