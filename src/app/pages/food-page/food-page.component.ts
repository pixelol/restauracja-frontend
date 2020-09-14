import { UserService } from './../../services/user-service/user.service';
import { User } from './../../models/user';
import { FoodService } from './../../services/food-service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  foods: User;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

  getFoodByTypeBreakfast(): any {
    const type = 'breakfast';
    this.foodService.HttpGetFoodByType(type).subscribe(e => {
      this.foods = e;
    });
  }

  getFoodByTypeDinner(): any {
    const type = 'dinner';
    this.foodService.HttpGetFoodByType(type).subscribe(e => {
      this.foods = e;
    });
  }

  getFoodByTypeSupper(): any {
    const type = 'supper';
    this.foodService.HttpGetFoodByType(type).subscribe(e => {
      this.foods = e;
    });
  }

}
