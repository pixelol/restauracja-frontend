import { ShoppingHistory } from './../../models/shopping-history';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) { }

  httpGetAllShoppingHistory(): Observable<Array<ShoppingHistory>> {
    return this.http.get<Array<ShoppingHistory>>('/api/shopping-history');
  }

  httpCreateShoppingHistory(shoppingHistory: ShoppingHistory): Observable<ShoppingHistory> {
    return this.http.post<ShoppingHistory>('/api/shopping-history', shoppingHistory);
  }

  httpDeleteShoppingHistory(shoppingHistory: ShoppingHistory): Observable<any> {
    const param = new HttpParams().set('id', shoppingHistory.id + '');
    return this.http.delete<ShoppingHistory>('/api/shopping-history', {params: param});
  }
}
