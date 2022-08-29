import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = []
  orders : Order[] = []
  constructor(private apiDataService : ApiDataService, private orderService : OrderService) { }

  ngOnInit(): void {
    this.products = this.apiDataService.FetchData() as unknown as Product[]

    this.orders = this.orderService.GetCurrentCart()
  }
  
}
