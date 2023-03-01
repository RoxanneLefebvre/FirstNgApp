import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit{

  @Input() produit:IBiere; //decorateur function qui ajout de linformation sur une proprieter
  @Input() peutEditer:boolean;
  estConnecte:boolean = false;
  @Output() peutEditerChange = new EventEmitter<boolean>(); // sert au two way binding
  modifForm:FormGroup;

constructor(private authServ:AuthService, private bieroServ:BieroService){

  // this.authServ.statusConnexion().subscribe((etat)=>{
  //   this.estConnecte =  etat
  //   if(etat===false){
  //     this.peutEditer = false;
  //   }
  // })
}

ngOnInit(): void {
  this.modifForm = new FormGroup({
    nom: new FormControl(this.produit.nom, [Validators.required, Validators.minLength(2)]),
    brasserie:new FormControl(this.produit.brasserie),
    description:new FormControl(this.produit.description)
  })
  
}


  // changeEditable(){

  //   if(!this.estConnecte){
  //     this.peutEditer = false;
  //   }
  //   this.peutEditerChange.emit(this.peutEditer);

  // }

  annuler(){
    this.modifForm.controls["nom"].setValue(this.produit.nom)
    this.modifForm.controls["brasserie"].setValue(this.produit.brasserie)
    this.modifForm.controls["description"].setValue(this.produit.description)

  }

  modifier(){
    let unProduit:IBiere = this.modifForm.value;
    this.bieroServ.modifierBiere(this.produit.id_biere, unProduit).subscribe((retour)=>{
      console.log(retour);
      this.peutEditer=false;
      this.produit.nom = unProduit.nom;
      this.produit.brasserie = unProduit.brasserie;
      this.produit.description = unProduit.description;
      
    });


  }

}
