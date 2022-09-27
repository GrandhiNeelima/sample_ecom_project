import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const routes: Routes = [{
  path: '',
  pathMatch: "full",
  component: LoginComponent
},{
  path: 'home',
  component: HomeComponent
},
  {
    path: 'product-list-page',
    component: ProductListPageComponent
  },
  {
    path: 'product-detail-page',
    component: ProductDetailPageComponent
  },
  {
    path: 'product-detail-page/:id',
    component: ProductDetailPageComponent
  },
  {
    path: 'shop-cart',
    component: ShopCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
