import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { AddMeniuComponent } from '../fetch-data/add-meniu/add-meniu.component';
import { DeleteMeniuComponent } from '../fetch-data/delete-meniu/delete-meniu.component';
import { EditMeniuComponent } from '../fetch-data/edit-meniu/edit-meniu.component';
import { Food, OrdersResponse } from '../fetch-data/model/fetch-data';
import { SelectMeniuComponent } from '../fetch-data/select-meniu/select-meniu.component';
import {ServiceService} from './service/service.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  _baseURL: string;
  public toSelect:Food;
  constructor(public service:ServiceService, public dialog: MatDialog,public http:HttpClient , @Inject('BASE_URL') baseUrl: string) { 
    this._baseURL=baseUrl;
  }

  ngOnInit() {

  }
  x: Tables = {
    busy: false,
    number: 99,
    id:1
  };

  AddTable()
  {
    
    this.service.Add(this.x).subscribe((response:any)=>{
      if(response)
      {
        console.log("lalalal")
      }
    })
  }

  
  DeleteTable()
  {
    this.service.Delete(this.x).subscribe((response:any)=>{
      if(response)
      {
        console.log("lalalal")
      }
    })
  }
  

  addMeniu() {
    const dialogConfiguration = new MatDialogConfig();
    dialogConfiguration.autoFocus = true;
    dialogConfiguration.disableClose = true;
    dialogConfiguration.width = '1000px';
    dialogConfiguration.height = '600px';

    const dialogRef = this.dialog.open(AddMeniuComponent, dialogConfiguration);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        console.log(response)
      }
    });
  }

 public  DeleteMeniu(){

    const dialogConfiguration = new MatDialogConfig();
    dialogConfiguration.autoFocus = true;
    dialogConfiguration.disableClose = true;
    dialogConfiguration.width = '1000px';
    dialogConfiguration.height = '600px';
    const dialogRef = this.dialog.open(DeleteMeniuComponent, dialogConfiguration);
    dialogRef.afterClosed().subscribe((response: Food) => {
      if (response) {
       console.log(response);
      }
    });

  }

  editMeniu(){

    
    const dialogConfiguration = new MatDialogConfig();
    dialogConfiguration.autoFocus = true;
    dialogConfiguration.disableClose = true;
    dialogConfiguration.width = '1000px';
    dialogConfiguration.height = '600px';

    const dialogRef = this.dialog.open(EditMeniuComponent, dialogConfiguration);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        console.log(response)
      }
    });
  }

  
}

export interface Tables{
  id: number;
  number:number;
  busy:boolean;

}
