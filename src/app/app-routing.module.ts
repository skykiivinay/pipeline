import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPagesComponent } from './components/pages/food-pages/food-pages.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'food/:id',component:FoodPagesComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
