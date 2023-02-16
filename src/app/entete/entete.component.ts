import { Component } from '@angular/core';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})

export class EnteteComponent {
  titre:String = "Administration"
  msgConnecter:string = "Se connecter"
  estConnecter:boolean = false;

  seConnecter(){
    this.estConnecter = !this.estConnecter;
    if(this.estConnecter){
      this.msgConnecter = "Se deconnecter";
    }else{
      this.msgConnecter = "Se connecter";
    }
  }
}
