import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';


const appRoutes: Routes = [
  {path: 'login', component: PageLoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
