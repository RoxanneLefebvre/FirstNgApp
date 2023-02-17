import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { IBiere } from '../ibiere';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent{

  @Input() produit:IBiere; //decorateur function qui ajout de linformation sur une proprieter
  @Input() peutEditer:boolean;
  estConnecte:boolean = false;
  @Output() peutEditerChange = new EventEmitter<boolean>(); // sert au two way binding

constructor(private authServ:AuthService){

  this.authServ.statusConnexion().subscribe((etat)=>{
    this.estConnecte =  etat
    if(etat===false){
      this.peutEditer = false;
    }
  })
}
  changeEditable(){

    if(!this.estConnecte){
      this.peutEditer = false;
    }
    this.peutEditerChange.emit(this.peutEditer);

  }

}
