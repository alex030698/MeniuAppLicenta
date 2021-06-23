import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';


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
    
    const resource: MeniuRequest = {

      FoodName:this.resourceForm.get(['FoodName']).value,
      Ingredients:this.resourceForm.get(['Ingredients']).value,
      preparationTime:this.resourceForm.get(['PreparationTime']).value,
      Price:this.resourceForm.get(['Price']).value
    }

    this.addResource(resource).subscribe((response: any) =>{
      
    })

    this.onClose();
  }

  addResource(resource: MeniuRequest): Observable<any> {
    
    return this.http.post<any>(this._baseURL + "addmeniuitem", resource);
  }
}


export interface MeniuRequest{
  FoodName:string;
  Ingredients:string;
  preparationTime:number;
  Price:number;
}