import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	offers= [];

  addToCart(offers) {
    this.offers.push(offers);
  }

  getItems() {
    return this.offers;
  }

  clearCart() {
    this.offers = [];
    return this.offers;
  }
}





