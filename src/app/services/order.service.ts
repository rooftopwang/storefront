import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  products : Product[] = []
  orders : Order[] = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 5 },
    { id: 3, quantity: 7 }
  ]

  constructor() { 
    
  }

  GetCurrentCart () : Order[] {
    return this.orders
  }

  AddToCart (product : Product) : void {
    let orderFound : number = 0

    for (const o of this.orders) {
      orderFound += o.id === product.id ? 1 : 0
      o.quantity += o.id === product.id ? 1 : 0
    }

    if (orderFound > 1)
      alert("duplicate order found")
    
    if (orderFound === 0)
      this.orders.push({
        id: product.id,
        quantity: 1
      })
  }

  WithdrawFromCart (product : Product) : void {
    let orderFound : number = 0

    for (const o of this.orders) {
      orderFound += o.id === product.id ? 1 : 0
      o.quantity -= o.id === product.id ? 1 : 0

      if(o.quantity === 0)
        this.orders = this.orders.filter(o => o.id !== product.id)
    }

    if (orderFound > 1)
      alert("duplicate order found")
  }

  UpdateCard (product : Product, quantity : number) : void {
    let orderFound : number = 0

    for (const o of this.orders) {
      orderFound += o.id === product.id ? 1 : 0
      o.quantity = o.id === product.id ? quantity : o.quantity
    }

    if (orderFound > 1)
      alert("duplicate order found")
  }
}
