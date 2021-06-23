import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EditMeniuComponent } from '../edit-meniu/edit-meniu.component';
import { Food } from '../model/fetch-data';
import {FetchDataService} from '../service/fetch-data.service'
@Component({
  selector: 'app-delete-meniu',
  templateUrl: './delete-meniu.component.html',
  styleUrls: ['./delete-meniu.component.css']
})


export class DeleteMeniuComponent implements OnInit {

  public _baseURL;
  constructor(public http:HttpClient, @Inject('BASE_URL') baseUrl: string ,public service:FetchDataService ,private dialogRef: MatDialogRef<EditMeniuComponent>) { 
    this._baseURL=baseUrl;
  }

  foods:Food[];
  ngOnInit() {

    this.service.getFood().subscribe((response: Food[]) => {
      this.foods=response;
    });


  }

  onClose() {
    this.dialogRef.close();
  }

}
