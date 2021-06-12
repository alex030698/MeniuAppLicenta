import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { Observable } from 'rxjs';
import { Food, Order,OrderFood } from '../model/home'
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  _baseURL: string;

  constructor(public http: HttpClient , @Inject('BASE_URL') baseUrl: string) {
    this._baseURL =baseUrl;
  }

  sendOrder(item:Food[]):Observable<Order>{

    return this.http.post<Food[]>(this._baseURL+'Home',item);
  }

  getFood(id:number):Observable<Food[]>{
    

      return this.http.get<Food[]>(this._baseURL+'Home');
  }
  
}
