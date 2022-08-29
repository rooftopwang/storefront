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
      this.products = data as unknown as Product[]
    } catch (e) {
      alert("fail to load data")
    }
  }
  
  async FetchData () {
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        res(this.products)
      })
    });
  }
}
