import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/nav-bar/service/service.service';
import {  } from '../delete-meniu/delete-meniu.component';
import { FetchDataComponent } from '../fetch-data.component';
import { Food } from '../model/fetch-data';
import { FetchDataService } from '../service/fetch-data.service';

@Component({
  selector: 'app-select-meniu',
  templateUrl: './select-meniu.component.html',
  styleUrls: ['./select-meniu.component.css']
})

export class SelectMeniuComponent implements OnInit {

  public _baseURL;
  constructor(public http:HttpClient, @Inject('BASE_URL') baseUrl: string , public service:FetchDataService ,private dialogRef: MatDialogRef<SelectMeniuComponent>) { 
    this._baseURL=baseUrl;
  
  }

  foods:Food[];
  send :Food;
  ngOnInit() {

    this.service.getFood().subscribe((response: Food[]) => {
      this.foods=response;
    });


  }

  onSubmit(item:string){
    this.foods.forEach(element => {
      if(element.id.toString()== item)
      {
        this.send=element;
        
      }
    });
    
    this.onClose();
  }

  onClose() {
    this.dialogRef.close(this.send);
  }

}
