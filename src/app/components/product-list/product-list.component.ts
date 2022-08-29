import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = []
  constructor(private apiDataService : ApiDataService) { }

  ngOnInit(): void {
    this.apiDataService.FetchData().then((res)=>{
      this.products = res as unknown as Product[]
    })
  }
  
}
