import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/buttons/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { DoFunctionPipe } from './pipes/do-function.pipe';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, DoFunctionPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    ReactiveFormsModule,
    IconsModule
  ],
  exports: [
    TotalPipe,
    DoFunctionPipe,
    StateDirective,
    TableauLightComponent,
    TableauDarkComponent,
    TemplatesModule,
    ButtonComponent,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class SharedModule { }
