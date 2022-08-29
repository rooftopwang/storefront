import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders : Order[] = []

  constructor() { }

  AddToCart (product : Product) {
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

  WithdrawFromCart (product : Product) {
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

  UpdateCard (product : Product, quantity : number) {
    let orderFound : number = 0

    for (const o of this.orders) {
      orderFound += o.id === product.id ? 1 : 0
      o.quantity = o.id === product.id ? quantity : o.quantity
    }

    if (orderFound > 1)
      alert("duplicate order found")
  }
}
