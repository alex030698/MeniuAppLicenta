import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
