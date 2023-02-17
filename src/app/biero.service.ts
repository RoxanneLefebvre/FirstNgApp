import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IListeBiere } from './iliste-biere';
import { IBiere } from './ibiere';

@Injectable({
  providedIn: 'root'
})
export class BieroService {
  private url_biero:string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http:HttpClient) {

  }

  getBieres():Observable<IListeBiere>{
    return this.http.get<IListeBiere>(this.url_biero);
    
  }

  getUneBiere(id:number):Observable<IBiere>{
    return this.http.get<IBiere>(this.url_biero+id);


  }

  ajouterBiere(){

  }
  effacerBiere(){

  }
  modifierBiere(){

  }
}
