import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationsRoutingModule } from './prestations-routing.module';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';


@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
