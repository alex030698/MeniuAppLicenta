import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food, OrdersResponse } from '../model/fetch-data';

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

   UpdateOrdersToPaid(item:OrdersResponse ):Observable<any>
   {
     return this.http.post<any>(this._baseURL+'Paid' , item);
   }
   UpdateOrdersToServed(item:OrdersResponse ):Observable<any>
   {
     return this.http.post<any>(this._baseURL+'Served' , item);
   }
   DeleteOrder(item:OrdersResponse ):Observable<any>
   {
     return this.http.post<any>(this._baseURL+'Delete' , item);
   }
   getSingleOrder(item:OrdersResponse):Observable<any>{
     return null;

   }


  getFood(): Observable<Food[]> {

    return this.http.get<Food[]>(this._baseURL + 'home');
  }
}

