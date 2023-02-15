import { Component } from '@angular/core';
import { IProduit} from '../iproduit'

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  produits:Array<IProduit>;
  //produits:Object[];


  constructor(){
    // this.produits = [] // doit dire cest quoi produit, sinon aller dans tsconfig.js et ajouter la ligne "strictPropertyInitialization": false,
    this.produits = [...Array(5)].map((item, index)=>{ //creer un tableau de 5 truc pour tester
      return {nom : "element" + index, fabriquant: "Brasserie xyz", prix: (10+index*2), id: index }
    }
    )
    console.log(this.produits);
    
  }

}
