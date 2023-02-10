import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Cart } from '../model/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // declare output to send out the cart data received from HTML form to parent, app.component
  // go to app.component and receive the output by declaring the input
  @Output()
  onCheckout = new Subject<Cart>()

  // declare the cartForm to a FormGroup
  cartForm!: FormGroup;
  cartArray!: FormArray;

  // construct the FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartArray = this.fb.array([])
    this.cartForm = this.createForm()

  }

  processCartForm() {
    const cart: Cart = this.cartForm.value as Cart
    console.info('>>> cart: ', cart)
    this.onCheckout.next(cart)
    this.cartForm.reset()
  }

  addCartItem() {
    const cartGroup = this.fb.group({
      item: this.fb.control(''),
      quantity: this.fb.control(''),
      unitPrice: this.fb.control('')
    })
    this.cartArray.push(cartGroup)
  }

  removeCartItem(i: number) {
    this.cartArray.removeAt(i)
  }





  // helper functions --------------------------------------------------------------
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('',Validators.required),
      address: this.fb.control('',Validators.required),
      email: this.fb.control('',[ Validators.required, Validators.email ]),
      phone: this.fb.control('',[Validators.required, Validators.minLength(8)]),
      express: this.fb.control('',Validators.required),
      delivery: this.fb.control('',Validators.required),
      items: this.cartArray
    })
  }

}
