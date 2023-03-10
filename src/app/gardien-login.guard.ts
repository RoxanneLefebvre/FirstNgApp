import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

/**
 * jai supprimer le gardien mais je le laisse ici pour plus tard ( a faire..)
 */
export class GardienLoginGuard implements CanActivate {
  estConnecte:boolean= false;
  constructor(private authServ:AuthService, private router:Router){
    // this.authServ.statusConnexion().subscribe((etat)=>{
    //   this.estConnecte = etat;
    //   console.log(this.estConnecte);
    //   if(this.estConnecte === false){
    //     this.router.navigate(['/'])
    //   }
      
      
    // })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let valide = false;
    if(this.estConnecte){
      valide = true;
    }

    if(valide){
      return true;
    }else{

      return this.router.parseUrl('/');
    }
  }
  
}
