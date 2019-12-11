import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.scss']
})
export class BascketComponent implements OnInit {

  products: Product[];

  quantityIncrease(name: string){
    for(let product of this.products){
      if(product.name==name){
        product.quantity++;
      }
    }
  }

  quantityDecrease(name: string){
    for(let product of this.products){
      if(product.name==name && product.quantity!=0){
        product.quantity--;
      }
    }
  }

  constructor(private productSrv: ProductsService){ }
  
  ngOnInit(){
    this.products = this.productSrv.getProducts();
  } 

}