import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  products: any
  finalproduct: any;
  totalcartvalue = 0;
  constructor(private productservice:ProductService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    var parameterdata="";
    this.products =  this.productservice.product
      //this.products =data;
      this.router.params.subscribe((param: any)=>{
      parameterdata = param['id']
      for(var index=0; index<this.products.length; index++)
      {
        if(this.products[index].id == parameterdata)
        {
             this.finalproduct=this.products[index];
             break;
        }
      }
    })
  }
  addproduct(){
    {
      var pro ={
      id:this.finalproduct.id,
      price:this.finalproduct.price,
      name:this.finalproduct.name,
      image:this.finalproduct.image,
  
      }
      //this.service.addproduct(pro).subscribe((data)=>
      {
       alert("Added To Cart");
      //})
    }}}

    addtocart(index:any, productId:any){
      let count = 1
       this.totalcartvalue += 1;
    
        this.productservice.orders.push({  "indexval" : index,  "quantity": count})
        //this.conditionTodisplay = true
        console.log(this.productservice.orders)
       this.productservice.sendTotal(this.totalcartvalue)
      }
}
