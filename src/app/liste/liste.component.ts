import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IProduit} from '../iproduit'

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit{
  produits:Array<IProduit>;
  editable:boolean= false;
  estConnecte:boolean =false;
  //produits:Object[];


  constructor(private authServ:AuthService){
    // this.produits = [] // doit dire cest quoi produit, sinon aller dans tsconfig.js et ajouter la ligne "strictPropertyInitialization": false,
    this.produits = [];



    
    // this.produits = [...Array(5)].map((item, index)=>{ //creer un tableau de 5 truc pour tester
    //   return {
    //     nom : "element" + index, 
    //     fabriquant: "Brasserie xyz",
    //     prix: (10+index*2), 
    //     id: 1+index,
    //     rabais : !(index % 3) 
    //   };
    // })

    
    //console.log(this.produits);
    
    
  }

  ngOnInit(): void {
    this.authServ.statusConnexion().subscribe((etat:boolean)=>{
      this.estConnecte = etat;
      if(this.estConnecte === false){
        this.editable = false;
      }
      
    });
    
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
