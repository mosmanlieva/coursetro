import { Component, OnInit } from '@angular/core';
import { LogService, User } from '../log.service';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];
  products: Product[];
  temp=true;
  
  constructor(private logSrv: LogService, private logProd: ProductsService) { }

  logIn(name: string, pass:string){
    if(this.isUser(name,pass)){
      this.temp=false;
      window.alert("Log in successfully");
    }
    else {
      window.alert("This username or password does not exist");
    }
  }

  isUser(name: string, pass: string){
    for(let user of this.users){
      if(user.userName==name && user.password==pass){
        return true;
      }
    }
    return false;
  }

  newUser(userName: string, password: string){

    if(userName==null || password===null){
      window.alert("Please insert username and password");
      return;
    }
    if(this.isUser(userName,password)){
      window.alert("This username already exists. Please change your username!");
      return;
    }
      this.users.push(new User(userName, password));
      window.alert('The registration was successfully made!');
      this.temp=false;
    
  }

  getTemp(){
    return this.temp;
  }

  setLogIn(name: string, pass: string){
    let myLogIn = {
      active: this.isUser(name,pass)==true,
      notactive: this.isUser(name,pass)==false,
    }
    return myLogIn;
  }

  ngOnInit() {
    this.users = this.logSrv.getLogs();
    this.products = this.logProd.getProducts();
  }

  isThere(product: string){
    for(let p of this.products){
      if(product==p.name)
        return true;
    }
    return false;
  }

}