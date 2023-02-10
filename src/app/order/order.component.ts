import { Component, Input } from '@angular/core';
import { Cart, Item } from '../model/model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input()
  cart!: Cart

  @Input()
  items: Item[] = []

  @Input()
  total!: number



  



}
