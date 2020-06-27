import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';

import { BlogPageComponent} from  './blog-page/blog-page.component';
import { TravelOffersComponent} from './travel-offers/travel-offers.component';

const routes: Routes = [
{
	path:"home",component:HomePageComponent
},
{
	path:"",component:HomePageComponent
},
{
	path:"blog",component:BlogPageComponent
},
   { path:"Travel Offers", component:TravelOffersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
