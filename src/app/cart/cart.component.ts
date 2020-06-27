import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
offers;
constructor(
	private cartService: CartService){}

ngOnInit() {

	this.offers = this.cartService.getItems();
	for(let mainOffer of this.offers){
		this.offersPrice+=Number(mainOffer.price);
	}
}

}