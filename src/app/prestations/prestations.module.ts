import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationsRoutingModule } from './prestations-routing.module';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
