import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  orders
  order1 :any[] = []
  constructor(private productservice: ProductService) {
    this.orders = this.productservice.orders
    for(let order of this.orders){
      for(let productorder of this.productservice.product){
        if(order.indexval==productorder.id){
          this.order1.push({"id": productorder.id,"name":productorder.name,"price":productorder.price,"image":productorder.url})
        }
      }
    }
   }

  ngOnInit(): void {
  }
  caltotal(): number{
    let value = 0;
    //return this.order1.reduce((sum, prod) => sum += prod.num , 0)
    this.order1?.forEach((e) => {
      value += 1 * e.price
    })
    return value
  }
}
