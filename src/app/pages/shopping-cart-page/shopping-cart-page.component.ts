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
  price: string;

  constructor(private shoppingCartService: ShoppingCartService) {
    shoppingCartService.foods.subscribe(e => {
      this.foods = e;
    });
    shoppingCartService.price.subscribe(e => {
      this.price = e;
    });
  }

  ngOnInit(): void {
  }

  removeFoodFromShoppingCart(food: Food): void {
    this.shoppingCartService.removeFoodFromShoppingCart(food);
  }

  addTwoNumbers(firtsNumber: string, secondNumber: string): void {
    firtsNumber = '13.13';
    secondNumber = '12.12';

  }

}
