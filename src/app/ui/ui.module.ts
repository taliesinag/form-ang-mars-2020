import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './components/ui/ui.component';



@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [UiComponent, HeaderComponent, FooterComponent, NavComponent]
})
export class UiModule { }
