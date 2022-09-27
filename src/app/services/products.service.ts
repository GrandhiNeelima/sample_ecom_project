import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable() export class ProductService{
public orderSubject = new Subject()
public totalSubject = new Subject()
    constructor(){
    
    }

    orders:any[] = []

  product=[
    {
    "id":"0",
    "quantity":2,
    "name":"Samsung M13 5G(Startdust Brown,6GB,128GB Storage) | 500mAh Battery | Upto 12GB RAM with RAM Plus",
    "price":320,
    "url":"assets/images/mobile2.webp"
},
{
    "id":"1",
    "name":"Samsung galaxy M13 5G(Startdust Brown,6GB,128GB Storage) | 500mAh Battery | Upto 12GB RAM with RAM Plus",
    "price":32,
    "url":"assets/images/mobile3.jpeg"
},
{
    "id":"2",
    "name":"Samsung galaxy M13 5G(Startdust Brown,6GB,128GB Storage) | 500mAh Battery | Upto 12GB RAM with RAM Plus",
    "price":9,
    "url":"assets/images/mobile1.webp"
}]

sendTotal(totalval:any){
    this.totalSubject.next(totalval)
}
}