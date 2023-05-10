import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewbankComponent } from './newbank/newbank.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"",component:NewbankComponent },
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
