import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelOffersComponent } from './travel-offers/travel-offers.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    HomePageComponent,
    BlogPageComponent,
    TravelOffersComponent,
    FooterComponent,
    CartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
