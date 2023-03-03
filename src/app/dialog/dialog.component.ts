import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  biere:IBiere; //declaration de biere de type biere
  id:number; //declaration de id type number

  /**
   * 
   * @param bieroServ service biero ou se trouve les fetch
   * @param data permet le data entre la boite de dialog et la function delete()
   * @param dialogEffacer boite de dialog pour etre sur de vouloir delete
   * @param snackBar material io snackbar, pour les message de success
   */
  constructor(private bieroServ:BieroService, @Inject(MAT_DIALOG_DATA) public data:any, public dialogEffacer: MatDialogRef<DialogComponent>, private snackBar: MatSnackBar){
    this.id = data.id; //data recu du dialog dans this.id pour function delete()
    
  }

  /**
   * function d'annulation si on ne veux pas delete ca ferme le modal
   */
  onNoClick(): void {
    this.dialogEffacer.close();
  }

  /**
   * function de supression dune biere ouvre snackbar si success
   * pas de redirection car deja sur page liste
   */
  delete(){
    this.bieroServ.effacerBiere( this.id ).subscribe((retour)=>{
      
      this.snackBar.open(' la biere a ete effacer', '',{
        duration:5000
      });
      
    });


  }

}
