import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { DoFunctionPipe } from './pipes/do-function.pipe';
import { TotalPipe } from './pipes/total.pipe';
import { ButtonComponent } from './components/buttons/button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TotalPipe, DoFunctionPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    TotalPipe,
    DoFunctionPipe,
    StateDirective,
    TableauLightComponent,
    TableauDarkComponent,
    TemplatesModule,
    ButtonComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
