import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})

export class EnteteComponent {
  titre:String = "Administration"
  // msgConnecter:string = "Se connecter"
  // estConnecter:boolean = true;

  constructor(private authServ:AuthService){
    
    // this.estConnecter = this.authServ.getConnexion();
    
    

  }

  // seConnecter(){
  //   this.estConnecter = !this.estConnecter;
  //   this.authServ.setConnexion(this.estConnecter);
  //   if(this.estConnecter){
  //     this.msgConnecter = "Se deconnecter";
  //   }else{
  //     this.msgConnecter = "Se connecter";
  //   }
  //   console.log(this.authServ);
  // }
}
