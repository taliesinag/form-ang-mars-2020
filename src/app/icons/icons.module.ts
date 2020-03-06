import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeIconsComponent } from './font-awesome-icons/font-awesome-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FontAwesomeIconsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [FontAwesomeIconsComponent]
})
export class IconsModule { }
