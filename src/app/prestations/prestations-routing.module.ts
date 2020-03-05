import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';


const routes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: {title: 'Prestations', subTitle: 'Toutes les prestations'}
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: {title: 'Prestations', subTitle: 'Ajouter une prestation'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
