import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Food } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  HttpGetFoodByType(type: string): any {
    const param = new HttpParams().set('type', type + '');
    return this.http.get<Array<User>>('/api/food/type', { params: param });
  }

  HttpCreateFood(food: Food): Observable<any> {
    return this.http.post<Food>('/api/food', food);
  }

  HttpUpdateFood(food: Food): Observable<any> {
    return this.http.put<Food>('/api/food', food);
  }

  HttpDeleteFood(food: Food): Observable<any> {
    const param = new HttpParams().set('id', food.id + '');
    return this.http.delete<Food>('/api/food', { params: param });
  }
}
