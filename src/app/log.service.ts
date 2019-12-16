import { Injectable } from '@angular/core';

export class User{
  userName: string;
  password: string;

  constructor(name: string, password: string){
    this.userName = name;
    this.password = password;
  }
}

@Injectable({
  providedIn: 'root'
})

export class LogService {

  users: User[] = [
    {
      userName: "maria",
      password: "maria"
    },

    {
      userName: "james",
      password: "123456"
    }
  ]

  constructor() { }

  getLogs(){
    return this.users;
  }
}
