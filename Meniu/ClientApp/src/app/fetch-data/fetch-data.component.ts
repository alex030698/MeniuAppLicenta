import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './service/fetch-data.service'
import { OrdersResponse } from './model/fetch-data';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Food} from './model/fetch-data'
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EditOrderComponent } from './edit-order/edit-order.component';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FetchDataComponent implements OnInit{

  panelOpenState = false;
  public foods: Food[];
  public orders: OrdersResponse[];
  public orderID:number;
  public toSelect:Food;
  displayedColumns: string[] = ['position','price', 'name', 'weight', 'symbol' ,'food','Edit'];
  //dataSource = ELEMENT_DATA;

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  public dataSource = new MatTableDataSource<OrdersResponse>([]);
   
  resourceForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    paid: new FormControl(null),
    served: new FormControl(null),
  });

  constructor(public dialog: MatDialog, private fetchData: FetchDataService) {}

  filterOptions = ['User Resouces', 'Team Resouces'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  ngOnInit(){

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  this.fetchData.GetOrders().subscribe((response: OrdersResponse[]) => {

      if(response)
      {
        console.log(response)
       /* response.forEach(element=>{
          if(element.served!='true')
          {
            element.served = 'No';
          }
          else{
            element.served = 'Yes';
          }
          if(element.paid!='true')
          {
            element.paid = 'No';
          }
          else{
            element.paid = 'Yes';
          }
        })*/
        this.dataSource.data = response;
        

        
      }
     console.log(this.dataSource.data)
   })


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  SetPaid(item:OrdersResponse)
  {

    this.fetchData.UpdateOrdersToPaid(item).subscribe((response:any)=>{
      console.log("gata")
    });
    window.location.reload()
  }
  SetServed(item:OrdersResponse)
  {

    if(item.served!='true')
    this.fetchData.UpdateOrdersToServed(item).subscribe((response:any)=>{
      console.log("gata")
      window.location.reload()
    });
    
  }

  Delete(item:OrdersResponse){
    this.fetchData.DeleteOrder(item).subscribe((response:any)=>{
      console.log("gata")
      window.location.reload()
    });

    
    
  }

  editOrder(item: OrdersResponse) {
    const dialogConfiguration = new MatDialogConfig();
    dialogConfiguration.autoFocus = true;
    dialogConfiguration.disableClose = true;
    dialogConfiguration.width = '1000px';
    dialogConfiguration.height = '600px';
    console.log(item.id);
    this.fetchData.getSingleOrder(item).subscribe((response: any) => {
      dialogConfiguration.data = item;

      const dialogRef = this.dialog.open(EditOrderComponent, dialogConfiguration);
      
      dialogRef.afterClosed().subscribe((response: any) => {
        if (response) {
          alert("text");
          
        }
      });

    });
}




}
