import { Component ,OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Food ,Order,Tile,OrderFood} from './model/home'
//import { FoodMock} from './mock/home'
import {HomeService} from './service/home.service'
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 

 

  displayedColumns: string[] = ['Preparat/Bautura', 'Pret' ,'Cantitate' ,'actions'];
  //displayedColumns= FoodMock;
  public table=1;
  public dataSource =new MatTableDataSource<Food>([]);
  public total=0;
  public token: string = "";
  private loginok: boolean = false;
  public foods:Food[];
  

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string , private homeservice:HomeService) {
    
    
    http.get<Food[]>(baseUrl+'Home').subscribe(result=>{ this.foods=result
      for(let item  of this.foods ){
        item.amount=0;
        item.total=0;
        item.table=this.table;

      }
      this.dataSource.data=this.foods;
      this.dataSource.sort;
      
      //console.log(this.foods, this.dataSource.data);
    })
     
    
  
  }
  
  

  ngOnInit(): void {

  }
  
  public currentCount = 0;

  public getAllFood()
  {
    console.log(this.foods ,this.dataSource.data)
    this.homeservice.sendOrder(this.foods).subscribe((response:Order)=>{
     // console.log("ok");
     // console.log("order :" ,response )
    })
  }

  public incrementCounter(item:Food) {
    
    item.amount++;
    item.total=item.price*item.amount;
    this.calculateTotal()

  }
  public decrementCounter(item:Food) {
  
    if(item.amount>0)
    {item.amount--;
      item.total=item.price*item.amount;
    this.calculateTotal()
    }
  }

  public calculateTotal()
  {
    this.total=0;
    this.dataSource.data.forEach(item =>{
      this.total+=item.total;
    })
  }
  public OnSubmit(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.getAllFood();
    //console.log(this.foods)
  }
  
}








