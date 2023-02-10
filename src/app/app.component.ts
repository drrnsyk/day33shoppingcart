import { Component } from '@angular/core';
import { Cart, Item } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart!: Cart
  items: Item[] = []
  total: number = 0
  prevOrderEmail!: String

  // function event that takes in the event, which is the data sent by the child
  processCheckout(cart: Cart) {
    this.cart = cart
    this.items = cart.items

    for (let item of this.items) {
      if (cart.email == this.prevOrderEmail) {
        this.total += item.quantity * item.unitPrice
      } else {
        this.total = 0
        this.total += item.quantity * item.unitPrice
      }
    }

    this.prevOrderEmail = cart.email
  }



}
