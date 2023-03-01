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
  biere:IBiere;
  id:number;
  constructor(private bieroServ:BieroService, @Inject(MAT_DIALOG_DATA) public data:any, public dialogEffacer: MatDialogRef<DialogComponent>, private snackBar: MatSnackBar){
    this.id = data.id;
    console.log(data);
    
  }

  onNoClick(): void {
    this.dialogEffacer.close();
  }

  delete(){
    console.log(this.id)
    this.bieroServ.effacerBiere( this.id ).subscribe((retour)=>{
      
      this.snackBar.open(' la biere a ete effacer', '',{
        duration:4000
      });
      
    });


  }

}
