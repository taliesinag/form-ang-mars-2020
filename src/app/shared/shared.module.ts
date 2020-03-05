import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { DoFunctionPipe } from './pipes/do-function.pipe';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, DoFunctionPipe, StateDirective, TableauLightComponent, TableauDarkComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    DoFunctionPipe,
    StateDirective,
    TableauLightComponent,
    TableauDarkComponent
  ]
})
export class SharedModule { }
