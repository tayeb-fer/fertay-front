import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Material from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { PlatsComponent } from './components/plats/plats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    PlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Material.MatMenuModule,
    Material.MatCheckboxModule
  ],
  exports: [
    Material.MatCheckboxModule,
    Material.MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
