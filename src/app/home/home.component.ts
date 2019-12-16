import { Component, OnInit } from '@angular/core';
import { LogService, User } from '../log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];
  temp=true;
  
  constructor(private logSrv: LogService) { }


  isUser(name: string, pass: string){
    if(name=='' || pass=='')
      console.log("Please insert uername and password!");
    for(let user of this.users){
      if(user.userName==name && user.password==pass){
        this.temp=true;
        return true;
      }
    }
    return false;
  }

  newUser(userName: string, password: string){

    if(!userName || !password){
      console.log("Please insert username and password");
    }
    else if(this.isUser(userName, password)){
      console.log("The username is already taken. Please choose another username");
    } else{
      this.users.push(new User(userName, password));
      window.alert('The registration was successfully made!');
      this.temp=false;
    }
  }

  getTemp(){
    return this.temp;
  }

  ngOnInit() {
    this.users = this.logSrv.getLogs();
  }

}