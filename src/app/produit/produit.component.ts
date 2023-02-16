import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent{

  @Input() produit:IProduit; //decorateur function qui ajout de linformation sur une proprieter
  @Input() peutEditer:boolean;
  @Output() peutEditerChange = new EventEmitter<boolean>(); // sert au two way binding


  changeEditable(){

    this.peutEditerChange.emit(this.peutEditer);

  }

}
