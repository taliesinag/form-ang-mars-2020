import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DoFunctionPipe } from './pipes/do-function.pipe';



@NgModule({
  declarations: [TotalPipe, DoFunctionPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    DoFunctionPipe
  ]
})
export class SharedModule { }
