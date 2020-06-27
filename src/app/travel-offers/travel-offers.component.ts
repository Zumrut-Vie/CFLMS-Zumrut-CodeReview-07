import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import{CartService} from '../cart.service';

@Component({
  selector: 'travel-offers',
  templateUrl: './travel-offers.component.html',
  styleUrls: ['./travel-offers.component.css']
})
export class TravelOffersComponent {
	constructor(private route: ActivatedRoute,private cartService: CartService){}
    addToCart(offers) {
    this.cartService.addToCart(offers);
    window.alert('Your product has been added to the cart!');} 
    
offers = [{
	teaser:`assets/kabakkoyu.jpg`,
	destination:"Kabak Bay",
	description: "Kabak is a small village in Lycia, Turkey. It is the perfect place to escape the package tourist groups, and a great place on the Turkish Mediterranean.",
	starting:"23.09.2020",
	duration:"2 weeks",
	price:900,
},
	{
	teaser:`assets/sav.jpg`,
	destination:"Şavşat",
	description: "Şavşat is a mountainous region covered with dense forests that offers a beutiful scenery. The region has many national parks, rivers, lakes and valleys worth seeing.",
	starting:"23.10.2020",
	duration:"1 week",
	price:800,
},
{   teaser:`assets/mut.jpg`,
	destination:"Mut",
	description: "Mut is a rural district at the foot of the Sertavul Pass on the road over the Taurus Mountains from Ankara and Konya to the Mediterranean coast at Anamur or Silifke.",
	starting:"23.11.2020",
	duration:"2 weeks",
	price:700,
},
{   teaser:`assets/goy.jpg`,
	destination:"Göynük",
	description: "Yet, Bolu's Göynük district, a mere three-four hours from Istanbul, promises an isolated and serene but brief getaway. Original Ottoman architecture.",
	starting:"23.12.2020",
	duration:"1 week",
	price:600,
}]

}



// constructor(private route:ActivatedRoute, private cartService) { }

// addToCart(offers){
// 	window.alert('It is in the cart!');
// 	this.cartService.addToCart(offers);
// }
 
