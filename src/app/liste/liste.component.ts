import { Component, OnInit, Inject } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';
import { IProduit} from '../iproduit'

import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit{
  produits:Array<IBiere>;
  editable:boolean= false;
  estConnecte:boolean =false;
  columnsToDisplay:string[] = ["id_biere", "nom", "brasserie", "date_ajout", "date_modif", "delete", "edit"];
  //produits:Object[];
  dataSource: MatTableDataSource<IBiere>;
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private authServ:AuthService, private bieroServ:BieroService, public dialog: MatDialog){
    // this.produits = [] // doit dire cest quoi produit, sinon aller dans tsconfig.js et ajouter la ligne "strictPropertyInitialization": false,
    this.produits = [];
    this.dataSource = new MatTableDataSource(this.produits);
    
    
    
  }

  openDialog(id:number) {
    let dialogEffacer = this.dialog.open(DialogComponent, {
    data: { id: id },
    });

    dialogEffacer.afterClosed().subscribe(()=>{
      this.bieroServ.getBieres().subscribe((listeBiere)=>{
        this.dataSource.data = listeBiere.data;
      });
      
    })
  }
  
  ngOnInit(): void {
    this.authServ.statusConnexion().subscribe((etat:boolean)=>{
      this.estConnecte = etat;
      if(this.estConnecte === false){
        this.editable = false;
      }
      
    });

    
    
    
    
  }
  
  ngAfterViewInit() {
    this.bieroServ.getBieres().subscribe((listeBiere)=>{
      this.produits = listeBiere.data;
      this.dataSource.data = this.produits;
      this.dataSource.sort = this.sort;
      
    });
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

 

  verifConnexion(){
    if(!this.authServ.getConnexion() && this.editable == true){
      this.editable = false;
    }
  }

  estEnSolde(unProduit:IProduit){ //recoit un truc de type IProduit

    return (unProduit.prix < 15 && unProduit.rabais)
  }

  verifEditable(unProduit:IProduit):boolean{ //recoit un truc de type IProduit
    let res:boolean= false;
    if(this.editable || unProduit.estEditable){
      res = true;
    }
    return res;
  }




}
