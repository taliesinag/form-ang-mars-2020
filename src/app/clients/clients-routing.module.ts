import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from '../prestations/pages/page-prestations/page-prestations.component';


const routes: Routes = [
  { path: '', component: PagePrestationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
