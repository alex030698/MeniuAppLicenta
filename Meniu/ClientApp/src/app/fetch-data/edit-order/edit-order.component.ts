






import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/nav-bar/service/service.service';
import { DeleteMeniuComponent } from '../delete-meniu/delete-meniu.component';
import { FetchDataComponent } from '../fetch-data.component';
import { Food, OrdersResponse } from '../model/fetch-data';
import { SelectMeniuComponent } from '../select-meniu/select-meniu.component';
import { FetchDataService } from '../service/fetch-data.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})




export class EditOrderComponent implements OnInit {

  public order:OrdersResponse;
  public _baseURL;
  constructor(public service:ServiceService,public dialog: MatDialog, @Inject('BASE_URL') baseUrl: string, private dialogRef: MatDialogRef<EditOrderComponent>, @Inject(MAT_DIALOG_DATA)public data :any) {
    this._baseURL = baseUrl;
    
    }

    resourceForm: FormGroup = new FormGroup({
      served: new FormControl(''),
      pret: new FormControl(0),
      timp: new FormControl(0),
      
  
    });
    task:Task;
  ngOnInit() {


    console.log(this.data)
    this.resourceForm.controls['served'].setValue(this.data.served);
    this.resourceForm.controls['pret'].setValue(this.data.price);
    this.resourceForm.controls['timp'].setValue(this.data.waittingTime);

  }
  onClose() {
    this.dialogRef.close();

  }

  
  onSubmit() {

    const resource: OrdersResponse = {

     id:this.data.id,
     orderNo:this.data.orderNo,
     orderDate:this.data.orderDate,
     price:this.resourceForm.get(['pret']).value,
     waittingTime:this.resourceForm.get(['timp']).value,
     paid:'false',
     served:this.resourceForm.get(['served']).value,
     comment:'',
     table:this.data.tableId,
     food:this.data.food

    }

    this.service.updateOrder(resource).subscribe((response: any) => {
      
    });
    this.onClose();
  }
  


  
}


export interface Task {
  name: string;
  completed: boolean;
  
  subtasks?: Task[];
}