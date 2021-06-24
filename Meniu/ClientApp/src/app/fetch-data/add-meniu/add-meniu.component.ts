import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Food } from '../model/fetch-data';


@Component({
  selector: 'app-add-meniu',
  templateUrl: './add-meniu.component.html',
  styleUrls: ['./add-meniu.component.css']
})
export class AddMeniuComponent implements OnInit {

  public _baseURL;
  resourceForm: FormGroup = new FormGroup({
    FoodName: new FormControl(''),
    Ingredients: new FormControl(''),
    Price: new FormControl(0),
    PreparationTime: new FormControl(0),
    Type: new FormControl(''),
  });

  constructor(public http:HttpClient, @Inject('BASE_URL') baseUrl: string ,private dialogRef: MatDialogRef<AddMeniuComponent>) { 
    this._baseURL=baseUrl;
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    
    const resource: Food = {

      id:0,
      name:this.resourceForm.get(['FoodName']).value,
      type:this.resourceForm.get(['Type']).value,
      amount:0,
      price:this.resourceForm.get(['Price']).value,
      ingredients:this.resourceForm.get(['Ingredients']).value,
      preparationTime:this.resourceForm.get(['PreparationTime']).value,
 
      tableId:0,
      
    }

    this.addResource(resource).subscribe((response: any) =>{
      console.log(response);
    })

    this.onClose();
  }

  addResource(resource: Food): Observable<any> {
    
    return this.http.post<any>(this._baseURL + "addmeniuitem", resource);
  }
}


export interface MeniuRequest{
  FoodName:string;
  Ingredients:string;
  preparationTime:number;
  Price:number;
  Type:string;
  amount:number;
  tableId:number;
  id:number;
}