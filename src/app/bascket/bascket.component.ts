import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.scss']
})
export class BascketComponent implements OnInit {

  products: Product[];
  pay=0;


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

  countBill(){
    var sum=0;
    for(let product of this.products){
      if(product.quantity>0){
        sum += product.price*product.quantity;
      }
    }
    this.pay=sum;
    return sum.toFixed(2);
  }

  payNow() {
    
    window.alert('The bill has been payed successfully!');
    for(let product of this.products){
      product.quantity=0;
    }
  }

  constructor(private productSrv: ProductsService){ }
  
  ngOnInit(){
    this.products = this.productSrv.getProducts();
  } 

}