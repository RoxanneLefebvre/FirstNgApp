import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  //biere:IBiere;
  @Input() produit:IBiere;
  ajouterForm:FormGroup;

  constructor(private route:ActivatedRoute, private bieroServ:BieroService, private snackBar: MatSnackBar, private router:Router){
    this.ajouterForm = new FormGroup({
      nom:new FormControl(),
      brasserie:new FormControl(),
      description:new FormControl()
    });
    
  }


  ajouter(){
    let unProduit:IBiere = this.ajouterForm.value;
    
    this.bieroServ.ajouterBiere(unProduit).subscribe((retour)=>{
      this.router.navigate(['/']);
      this.snackBar.open(' La biere a ete ajouter avec success', '',{
        duration:5000
      });
      
    });


  }

  annuler(){
    //this.ajouterForm.controls["nom"].setValue(this.biere.nom)
    //this.ajouterForm.controls["brasserie"].setValue(this.biere.brasserie)
    //this.ajouterForm.controls["description"].setValue(this.biere.description)

  }


}
