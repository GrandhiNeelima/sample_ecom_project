import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './services/products.service';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    LoginComponent,
    HeaderComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
