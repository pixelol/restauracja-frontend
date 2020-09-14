import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { Food } from './../../models/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

  foods: Array<Food>;

  constructor(private shoppingCartService: ShoppingCartService) {
    shoppingCartService.foods.subscribe(e => {
      this.foods = e;
      console.log(this.foods);
    });
  }

  ngOnInit(): void {
  }

}
