import { FoodService } from './../../services/food-service/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  foods: Array<Food>;

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
