import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 totalvalue:any
  constructor(private productservice: ProductService,private router: Router) { }

  ngOnInit(){
    this.productservice.totalSubject.subscribe(totalvalue => {
      console.log("got" + totalvalue)
      this.totalvalue = totalvalue
    })
  }
 cart(){
  this.router.navigate(['/shop-cart'])
 }
}
