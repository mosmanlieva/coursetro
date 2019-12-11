import { Injectable } from '@angular/core';

type ProductType = "Meat" | "Fish" | "Bread" | "Pasta";

export interface Product{
  name: string;
  price: number;
  description: string;
  picture: string;
  quantity: number;
  type: ProductType;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  products: Product[] = [
    {
      name: "Chicken",
      price: 5,
      description: "One kilo fresh chicken filets",
      picture: "assets/Chicken.jpg",
      quantity: 0,
      type: "Meat"
    },

    {
      name: "Pork",
      price: 7,
      description: "One kilo fresh pork shoulder",
      picture: "assets/Pork.jpg",
      quantity: 0,
      type: "Meat"
    },

    {
      name: "Beef",
      price: 8,
      description: "One kilo fresh Beef",
      picture: "assets/Beef.jpg",
      quantity: 0,
      type: "Meat"
    },
    
    {
      name: "Duck",
      price: 6,
      description: "One fresh duck ~2kilos",
      picture: "assets/Duck.jpg",
      quantity: 0,
      type: "Meat"
    },

    {
      name: "Lamb",
      price: 10,
      description: "One kilo fresh Lamb shoulder",
      picture: "assets/Lamb.jpg",
      quantity: 0,
      type: "Meat"
    },

    {
      name: "Rabbit",
      price: 8,
      description: "One fresh Rabbit ~1,2 kilos",
      picture: "assets/Rabbit.jpg",
      quantity: 0,
      type: "Meat"
    },

    {
      name: "Turkey",
      price: 6,
      description: "One fresh Turkey ~3kilos",
      picture: "assets/Turkey.jpg",
      quantity: 0,
      type: "Meat"
    },
    /*{
      name: "",
      price: 7,
      description:  "One kilo fresh",
      picture: "assets/.jpg",
      quantity: 0,
      type: "Meat"
    },*/
  ]

  getProducts(){
    return this.products;
  }

}

