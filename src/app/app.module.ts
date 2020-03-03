import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageClientsComponent } from './clients/pages/page-clients/page-clients.component';


@NgModule({
  declarations: [
    AppComponent,
    PageClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
