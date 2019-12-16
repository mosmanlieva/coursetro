import { Injectable } from '@angular/core';

type ProductType = "Meat" | "Fish" | "Bread" | "Pasta" | "Milk products";

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
    
    {
      name: "Croisant",
      price: 2,
      description:  "Five croisants",
      picture: "assets/croisant.jpg",
      quantity: 0,
      type: "Bread"
    },
    {
      name: "Rye Bread",
      price: 1,
      description:  "Rye Bread",
      picture: "assets/rye.jpg",
      quantity: 0,
      type: "Bread"
    },

    {
      name: "Pretzels",
      price: 3.20,
      description:  "Five mini pretzels",
      picture: "assets/pretzels.jpg",
      quantity: 0,
      type: "Bread"
    },
    {
      name: "Wheat Bread",
      price: 1.50,
      description: "Wheat Bread",
      picture: "assets/wheat.jpg",
      quantity: 0,
      type: "Bread"
    },
    {
      name: "White Bread",
      price: 1.20,
      description:  "White Bread",
      picture: "assets/whiteb.jpg",
      quantity: 0,
      type: "Bread"
    },
    {
      name: "White cheese",
      price: 5,
      description:  "One kilo fresh white cheese",
      picture: "assets/white.jpg",
      quantity: 0,
      type: "Milk products"
    },
    
    {
      name: "Milk",
      price: 1.5,
      description:  "One litre Milk",
      picture: "assets/milk.jpg",
      quantity: 0,
      type: "Milk products"
    },
    {
      name: "Gouda",
      price: 7,
      description:  "One kilo Gouda",
      picture: "assets/gouda.jpg",
      quantity: 0,
      type: "Milk products"
    },
    {
      name: "Cheddar",
      price: 7.5,
      description:  "One kilo cheddar",
      picture: "assets/cheddar.jpg",
      quantity: 0,
      type: "Milk products"
    },
    {
      name: "Edam",
      price: 9.5,
      description:  "One kilo edam cheese",
      picture: "assets/edam.jpg",
      quantity: 0,
      type: "Milk products"
    },
    {
      name: "Emental",
      price: 9.5,
      description:  "One kilo emental cheese",
      picture: "assets/emental.jpg",
      quantity: 0,
      type: "Milk products"
    },
    {
      name: "Macaroni",
      price: 2.20,
      description:  "750gr Macaroni",
      picture: "assets/macaroni.jpg",
      quantity: 0,
      type: "Pasta"
    },
    
    {
      name: "Flat Pasta",
      price: 1.2,
      description:  "250gr Flat Pasta",
      picture: "assets/flat.jpg",
      quantity: 0,
      type: "Pasta"
    },
    
    {
      name: "Sagnarelli",
      price: 1.6,
      description:  "300gr Sagnarelli",
      picture: "assets/sagnarelli.jpg",
      quantity: 0,
      type: "Pasta"
    },
    
    {
      name: "Farfalle Pasta",
      price: 3,
      description:  "250gr Farfalle Pasta",
      picture: "assets/farfalle.jpg",
      quantity: 0,
      type: "Pasta"
    },

    
    {
      name: "Noodles",
      price: 7,
      description:  "500gr Noodles",
      picture: "assets/noodle.jpg",
      quantity: 0,
      type: "Pasta"
    },

    
    {
      name: "Heringe",
      price: 10,
      description:  "One kilo Heringe",
      picture: "assets/heringe.jpg",
      quantity: 0,
      type: "Fish"
    },
    
    {
      name: "Sardines",
      price: 9,
      description:  "One kilo Sardines",
      picture: "assets/sardines.jpg",
      quantity: 0,
      type: "Fish"
    },
    
    {
      name: "Cod",
      price: 7,
      description:  "One kilo cod",
      picture: "assets/cod.jpg",
      quantity: 0,
      type: "Fish"
    },
    
    {
      name: "Mackerel",
      price: 10,
      description:  "One kilo Mackerel",
      picture: "assets/mackerel.jpg",
      quantity: 0,
      type: "Fish"
    },
    {
      name: "Halibut",
      price: 7,
      description:  "One Halibut",
      picture: "assets/halibut.jpg",
      quantity: 0,
      type: "Fish"
    },
    {
      name: "Trout",
      price: 10,
      description:  "One Trout",
      picture: "assets/trout.jpg",
      quantity: 0,
      type: "Fish"
    },
    {
      name: "Tuna",
      price: 15.5,
      description:  "One kilo Tuna",
      picture: "assets/tuna.jpg",
      quantity: 0,
      type: "Fish"
    },
    {
      name: "Salmon",
      price: 20.2,
      description:  "One kilo Salmon",
      picture: "assets/salmon.jpg",
      quantity: 0,
      type: "Fish"
    },

  ]

  getProducts(){
    return this.products;
  }

}

