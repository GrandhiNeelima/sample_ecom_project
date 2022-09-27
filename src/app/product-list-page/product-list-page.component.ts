import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {
  //@Input() product: any;
  products:any;
  orders = []
  totalcartvalue = 0;
  conditionTodisplay  = false;
  value:any
  constructor(private router: Router,private productservice: ProductService) { 

     this.products = productservice.product
  }

  ngOnInit(): void {
  }
 list(){
  this.router.navigate(['/product-detail-page'])
 }

 addProuct(product: any){
  
 }
 addtocart(index:any, productId:any){
  let count = 1
   this.totalcartvalue += 1;

    this.productservice.orders.push({  "indexval" : index,  "quantity": count})
    //this.conditionTodisplay = true
    console.log(this.productservice.orders)
   this.productservice.sendTotal(this.totalcartvalue)
  }
}
