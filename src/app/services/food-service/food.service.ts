import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  HttpGetFoodByType(type: string): any {
    const param = new HttpParams().set('type', type + '');
    return this.http.get<Array<User>>('http://localhost:8080/api/food/type', { params: param });
  }
}
