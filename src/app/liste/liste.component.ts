import { Component, OnInit, Inject } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';


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


export class ListeComponent{
  produits:Array<IBiere>; //declartion produit est un array de type biere

  columnsToDisplay:string[] = ["id_biere", "nom", "brasserie", "date_ajout", "date_modif", "delete", "edit"]; // colone dans mon mat table a afficher

  dataSource: MatTableDataSource<IBiere>; //declartion de datasource de type biere pour le sort 
  
  @ViewChild(MatSort) sort: MatSort;
  
    /**
   * 
   * @param bieroServ service biero ou se trouve les fetch
   * @param dialog boite de dialog pour etre sur de vouloir delete
   */
  constructor(private bieroServ:BieroService, public dialog: MatDialog){
    this.produits = []; //produit est vide a l'initialisation
    this.dataSource = new MatTableDataSource(this.produits); // datasource est un instance de MatTableDataSource
    
    
    
  }

  /**
   * function qui ouvre la boite de dialog
   * appelle component DialogComponent
   * un fois fermer, un fetch est fait pour updater la liste
   * @param id id de la biere a supprimer
   */
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
  
  
  /**
   * apres l'initialisation, affiche une table de tout mes produit biere avec un fetch
   */
  ngAfterViewInit() {
    this.bieroServ.getBieres().subscribe((listeBiere)=>{
      this.produits = listeBiere.data; //tout le data dans produits
      this.dataSource.data = this.produits; //tout le produit dans le datasource
      this.dataSource.sort = this.sort; //prend le datasource pour faire un sort
      
    });
 }

 /**
  * fucntion de recherche dans tout les produit
  * @param event resultat du la valeur du input de recherche
  */
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value; //declaration de la valeur a rechercher
  this.dataSource.filter = filterValue.trim().toLowerCase(); //le filtre dans le data selon la valeur
}



}
