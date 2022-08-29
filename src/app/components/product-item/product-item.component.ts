import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() 
  order : Order | null = null

  product : Product | null = null

  constructor(private apiDataService : ApiDataService) { 
    
  }

  ngOnInit(): void {
    if(this.order == null)
      throw "order not found"

    this.product = this.apiDataService.FindProduct(this.order?.id)
  }

}
