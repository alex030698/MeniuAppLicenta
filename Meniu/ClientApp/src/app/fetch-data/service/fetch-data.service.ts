import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersResponse } from '../model/fetch-data';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  _baseURL: string;


  constructor(public http: HttpClient , @Inject('BASE_URL') baseUrl: string) {
    this._baseURL=baseUrl;
   }

   GetOrders():Observable<OrdersResponse[]>
   {
      return this.http.get<OrdersResponse[]>(this._baseURL+'Admin');
   }
}
