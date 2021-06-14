import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FetchDataService} from './service/fetch-data.service'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { OrdersResponse } from './model/fetch-data';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public foods:Food[];
 public orders:OrdersResponse[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string ,private fetchData:FetchDataService) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
      console.log(this.forecasts)
    }, error => console.error(error));


    http.get<Food[]>(baseUrl+'Home').subscribe(result=>{ this.foods=result

      console.log(this.foods)
    })

     this.fetchData.GetOrders().subscribe((response:OrdersResponse[])=>{
       console.log(response);
     })
  
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
interface Food{
  id:number;
  name:string;
  type:string;
  price:number;
  ingredients:string;
  preparatiomTime:number;
}

function GetOrders() {
  throw new Error('Function not implemented.');
}
