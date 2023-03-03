import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent {
  biere:IBiere; //declation de biere est de type biere
  modifForm:FormGroup; // declaration de mon form de modification
  
  /**
   * 
   * @param route route active
   * @param bieroServ service biero ou se trouve les fetch
   * @param snackBar material io snackbar, pour les message de success
   * @param router permet de les redirection
   */
  constructor(private route:ActivatedRoute, private bieroServ:BieroService, private snackBar: MatSnackBar, private router:Router){
    /**
     * declaration des form control dans mon formgroup
     */
    this.modifForm = new FormGroup({ 
      nom:new FormControl('', [Validators.required]),
      brasserie:new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required])
    });
    
  }


  /**
   * function de validation derreur du formgroup modifForm
   * @returns message derreur pour chaque input
   */
  getErrorMessage() {
    if (this.modifForm.controls["nom"].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.modifForm.controls["brasserie"].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.modifForm.controls["description"].hasError('required')) {
      return 'You must enter a value';
    }
    return this.modifForm.controls["nom"].hasError('nom') ? 'you must enter a value' : '';
  }

  /**
   * sur initialisation de la classe fetch sur une biere en particulier
   */
  ngOnInit():void {

  
    this.route.params.subscribe((params)=>{
      this.bieroServ.getUneBiere(params["id"]).subscribe((biere:any)=>{

        this.biere = biere.data; //set les valeur recue dans mon biere de type biere
        this.modifForm.controls["nom"].setValue(this.biere.nom) //set les valeur a afficher par default dans le form
        this.modifForm.controls["brasserie"].setValue(this.biere.brasserie)
        this.modifForm.controls["description"].setValue(this.biere.description)
        
      })
      
    })

    
    
  }

  /**
   * function qui reset les valeur a default dans le form si on annule. pourrait aussi etre une redirection vers liste..
   */
  annuler(){
    this.modifForm.controls["nom"].setValue(this.biere.nom)
    this.modifForm.controls["brasserie"].setValue(this.biere.brasserie)
    this.modifForm.controls["description"].setValue(this.biere.description)

  }

  /**
   * function de modification d'une biere
   * fait une redirection vers liste si success et ouvre un snackbar pour 5 seconde avec message de success
   */
  modifier(){
    let unProduit:IBiere = this.modifForm.value;
    this.bieroServ.modifierBiere(this.biere.id_biere, unProduit).subscribe((retour)=>{
      this.biere.nom = unProduit.nom;
      this.biere.brasserie = unProduit.brasserie;
      this.biere.description = unProduit.description;
      this.router.navigate(['/']);
      this.snackBar.open(' la biere a modifier avec success', '',{
        duration:5000
      });
      
    });


  }
  

}
