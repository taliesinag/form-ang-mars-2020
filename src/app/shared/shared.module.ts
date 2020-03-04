import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DoFunctionPipe } from './pipes/do-function.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TotalPipe, DoFunctionPipe, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    DoFunctionPipe,
    StateDirective
  ]
})
export class SharedModule { }
