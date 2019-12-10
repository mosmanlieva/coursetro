import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    types = [ "Meat", "Fish", "Bread", "Pasta"]
    ngOnInit(){

    }
  }

