import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food, OrdersResponse } from 'src/app/fetch-data/model/fetch-data';
import { Tables } from '../nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  public _baseURL;
  constructor(public http:HttpClient , @Inject('BASE_URL') baseUrl: string) {
    this._baseURL=baseUrl;
   }

  Add(item:Tables):Observable<Tables[]>
   {
    return this.http.post<Tables[]>(this._baseURL +'AddTable',item);
   }
   Delete(item:Tables):Observable<Tables[]>
   {
    return this.http.post<Tables[]>(this._baseURL +'DeleteTable',item);
   }

   updateMeniu(item:Food){

    return this.http.post<any>(this._baseURL+'EditMeniu',item);
   }

   updateOrder(item:OrdersResponse){

    return this.http.post<any>(this._baseURL+'EditOrder',item);
   }

}
