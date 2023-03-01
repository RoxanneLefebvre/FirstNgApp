import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { GardienLoginGuard } from './gardien-login.guard';
import { ListeComponent } from './liste/liste.component';
import { NonTrouveeComponent } from './non-trouvee/non-trouvee.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  {path : "", component:ListeComponent},
  {path : "ajouter", component:AjouterComponent},
  {path : "produit", component:ListeComponent},
  {path : "produit/:id", component:DetailComponent},
  {path : "**", component:NonTrouveeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// canActivate:[GardienLoginGuard] pour ajouter guardian mettre ca dans le path