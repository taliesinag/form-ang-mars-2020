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
import { TrashComponent } from './icons/trash/trash.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrashIconComponent } from './icons/trash-icon/trash-icon.component';



@NgModule({
  declarations: [TotalPipe, DoFunctionPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent, TrashComponent, TrashIconComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
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
    TrashComponent,
    TrashIconComponent
  ]
})
export class SharedModule { }
