import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-shopping-done',
  templateUrl: './shopping-done.component.html',
  styleUrls: ['./shopping-done.component.css']
})
export class ShoppingDoneComponent implements OnInit {

  purchaseHistory: Array<Food> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
