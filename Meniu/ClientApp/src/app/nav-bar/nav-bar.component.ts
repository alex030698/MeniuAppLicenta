import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { AddMeniuComponent } from '../fetch-data/add-meniu/add-meniu.component';
import { OrdersResponse } from '../fetch-data/model/fetch-data';
import {ServiceService} from './service/service.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  _baseURL: string;
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
}

export interface Tables{
  id: number;
  number:number;
  busy:boolean;

}
