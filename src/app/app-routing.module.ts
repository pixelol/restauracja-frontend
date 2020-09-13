import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'food', component: FoodPageComponent },
  { path: 'shopping-cart', component: ShoppingCartPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'logout', component: LogoutPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginPageComponent,
  HomePageComponent,
  FoodPageComponent,
  ShoppingCartPageComponent,
  AdminPageComponent,
  LogoutPageComponent
];
