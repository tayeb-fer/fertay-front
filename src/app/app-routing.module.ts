import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatsComponent } from './components/plats/plats.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';


const routes: Routes = [
  {
    path:'plats',
    component:PlatsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'restaurant',
    component:RestaurantComponent
  },
{
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
