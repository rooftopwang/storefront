import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import * as data from '../../assets/data.json';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  products: Product[] = []
  constructor() { 
    try {
      this.products = data as unknown[] as Product[]
    } catch (e) {
      alert("fail to load data")
    }
  }
  
  FetchData () : Product[] {
    return this.products
  }

  FindProduct (id : number) : Product | null {
    try{
      // const arr : Product[] = Array.isArray(this.products) ? this.products.filter(p => (p.id === id)) : []
      // return arr.length === 0 ? null : arr[0]
      for (const product of this.products) {
        if(product.id === id)
          return product
      }

      return null
    }catch(e){
      return null
    }
    
  }
}
