import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BieroService {
  private url_bier0:string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http:HttpClient) {

  }

  getBieres():Observable<IListeBiere>{
    
  }
  
  getUneBiere(){

  }
  ajouterBiere(){

  }
  effacerBiere(){

  }
  modifierBiere(){

  }
}
