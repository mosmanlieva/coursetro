import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TouchSequence } from 'selenium-webdriver';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    products: Product[];
    types = [ "Meat", "Fish", "Bread", "Pasta"];


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

    constructor(private productSrv: ProductsService){

    }
    
    ngOnInit(){
      this.products = this.productSrv.getProducts();
    }
  }

