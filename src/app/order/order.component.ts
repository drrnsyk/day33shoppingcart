import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cart, Item } from '../model/model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges {

  @Input()
  cart!: Cart

  @Input()
  items: Item[] = []

  total: number = 0

  ngOnChanges(changes: SimpleChanges): void {
    console.info('changes: ', changes['cart'])
    const c = changes['cart'].currentValue as Cart

    for (let item of this.items)
      this.total += item.quantity * item.unitPrice

  }


}
