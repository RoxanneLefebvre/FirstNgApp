import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  //biere:IBiere;
  @Input() produit:IBiere;
  ajouterForm:FormGroup;

  constructor(private route:ActivatedRoute, private bieroServ:BieroService){
    this.ajouterForm = new FormGroup({
      nom:new FormControl(),
      brasserie:new FormControl(),
      description:new FormControl()
    });
    
  }


  ajouter(){
    let unProduit:IBiere = this.ajouterForm.value;
    
    this.bieroServ.ajouterBiere(unProduit).subscribe((retour)=>{
      console.log(retour);
      /*this.biere.nom = unProduit.nom;
      this.biere.brasserie = unProduit.brasserie;
      this.biere.description = unProduit.description;*/
      
    });


  }

  annuler(){
    //this.ajouterForm.controls["nom"].setValue(this.biere.nom)
    //this.ajouterForm.controls["brasserie"].setValue(this.biere.brasserie)
    //this.ajouterForm.controls["description"].setValue(this.biere.description)

  }


}
