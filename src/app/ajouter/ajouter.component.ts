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
  @Input() produit:IBiere; //me input son de type Ibiere
  ajouterForm:FormGroup; // declaration de mon form ajouter

  /**
   * 
   * @param route route active
   * @param bieroServ service biero ou se trouve les fetch
   * @param snackBar material io snackbar, pour les message de success
   * @param router permet de les redirection
   */
  constructor(private route:ActivatedRoute, private bieroServ:BieroService, private snackBar: MatSnackBar, private router:Router){
    /**
     * initialisation de mes formcontrol dans mon form group
     */
    this.ajouterForm = new FormGroup({
      nom:new FormControl(),
      brasserie:new FormControl(),
      description:new FormControl()
    });
    
  }

  /**
   * function de validation
   * @returns message d'erreur pour chaque input non remplis correctement
   */
  getErrorMessage() {
    if (this.ajouterForm.controls["nom"].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.ajouterForm.controls["brasserie"].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.ajouterForm.controls["description"].hasError('required')) {
      return 'You must enter a value';
    }
    return this.ajouterForm.controls["nom"].hasError('nom') ? 'you must enter a value' : '';
  }

  /**
   * function d'ajout d'une biere
   * message de success utilisant le snackbar
   */
  ajouter(){
    let unProduit:IBiere = this.ajouterForm.value;
    
    this.bieroServ.ajouterBiere(unProduit).subscribe((retour)=>{
      this.router.navigate(['/']); //redirection avec success
      this.snackBar.open(' La biere a ete ajouter avec success', '',{ //ouverture du snackbar pour 5 seconde
        duration:5000
      });
      
    });


  }

  /**
   * function de redirection a la liste des biere, aurait pu etre un lien ;)
   */
  annuler(){
    this.router.navigate(['/']); //redirection vers liste des bieres
  }


}
