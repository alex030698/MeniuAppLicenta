import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/nav-bar/service/service.service';
import { DeleteMeniuComponent } from '../delete-meniu/delete-meniu.component';
import { FetchDataComponent } from '../fetch-data.component';
import { Food } from '../model/fetch-data';
import { SelectMeniuComponent } from '../select-meniu/select-meniu.component';
import { FetchDataService } from '../service/fetch-data.service';

@Component({
  selector: 'app-edit-meniu',
  templateUrl: './edit-meniu.component.html',
  styleUrls: ['./edit-meniu.component.css']
})
export class EditMeniuComponent implements OnInit {

  public food:Food;
  public _baseURL;
  constructor(public http: HttpClient,public service:ServiceService,public dialog: MatDialog, @Inject('BASE_URL') baseUrl: string, private dialogRef: MatDialogRef<SelectMeniuComponent>) {
    this._baseURL = baseUrl;
  }

  public foods:Food;
  resourceForm: FormGroup = new FormGroup({
    preparat: new FormControl(''),
    pret: new FormControl(0),
    tip: new FormControl(''),
    timp: new FormControl(0),
    ingrediente:new FormControl(''),

  });
  ngOnInit() {

    
    


  }
  onClose() {
    this.dialogRef.close();

  }

  onEdit()
  {
    const dialogConfiguration = new MatDialogConfig();
    dialogConfiguration.autoFocus = true;
    dialogConfiguration.disableClose = true;
    dialogConfiguration.width = '1000px';
    dialogConfiguration.height = '600px';
    const dialogRef = this.dialog.open(SelectMeniuComponent, dialogConfiguration);
    dialogRef.afterClosed().subscribe((response: Food) => {
      if (response) {
        this.food=response;
       console.log(response);
       this.resourceForm.controls['preparat'].setValue(response.name);
    this.resourceForm.controls['pret'].setValue(response.price);
    this.resourceForm.controls['tip'].setValue(response.type);
    this.resourceForm.controls['timp'].setValue(response.preparationTime);
    this.resourceForm.controls['ingrediente'].setValue(response.ingredients);

    this.ngOnInit();
      }
    });
  }
  onSubmit() {

    const resource: Food = {
      name: this.resourceForm.get(['preparat']).value,
      price: this.resourceForm.get(['pret']).value,
      preparationTime: this.resourceForm.get(['timp']).value,
      type: this.resourceForm.get(['tip']).value,
      id: this.food.id,
      ingredients: this.resourceForm.get(['ingrediente']).value,
      amount: 0,
      tableId: 0,
    }
    this.service.updateMeniu(resource).subscribe((response: any) => {
      
    });
    this.onClose();
  }
  
}
