import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  biere:IBiere;
  @Input() produit:IBiere;
  modifForm:FormGroup;

  constructor(private route:ActivatedRoute, private bieroServ:BieroService){
    this.modifForm = new FormGroup({
      nom:new FormControl(),
      brasserie:new FormControl(),
      description:new FormControl()
    });
    
  }


  ngOnInit():void {

   

    this.route.params.subscribe((params)=>{
      this.bieroServ.getUneBiere(params["id"]).subscribe((biere:any)=>{

        this.biere = biere.data;
        this.modifForm.controls["nom"].setValue(this.biere.nom)
        this.modifForm.controls["brasserie"].setValue(this.biere.brasserie)
        this.modifForm.controls["description"].setValue(this.biere.description)
        
      })
      
    })

    
    
  }

  annuler(){
    this.modifForm.controls["nom"].setValue(this.biere.nom)
    this.modifForm.controls["brasserie"].setValue(this.biere.brasserie)
    this.modifForm.controls["description"].setValue(this.biere.description)

  }

  modifier(){
    let unProduit:IBiere = this.modifForm.value;
    this.bieroServ.modifierBiere(this.biere.id_biere, unProduit).subscribe((retour)=>{
      this.biere.nom = unProduit.nom;
      this.biere.brasserie = unProduit.brasserie;
      this.biere.description = unProduit.description;
      
    });


  }
  

}
