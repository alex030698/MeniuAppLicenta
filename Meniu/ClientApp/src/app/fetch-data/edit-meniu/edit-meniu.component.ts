import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-meniu',
  templateUrl: './edit-meniu.component.html',
  styleUrls: ['./edit-meniu.component.css']
})
export class EditMeniuComponent implements OnInit {

  public _baseURL;
  constructor(public http:HttpClient, @Inject('BASE_URL') baseUrl: string ,private dialogRef: MatDialogRef<EditMeniuComponent>) { 
    this._baseURL=baseUrl;
  }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
    
  }
/*
  onSubmit() {
    
    const resource: ResourceRequest = {
      id: this.data.resourceId,
      resourceType: this.resourceForm.get(['resourceType']).value,
      itemCode: this.resourceForm.get(['itemCode']).value,
      inventoryNo: this.resourceForm.get(['inventoryNo']).value,
      costCenter: this.resourceForm.get(['costCenter']).value,
      model: this.resourceForm.get(['model']).value,
      ram: this.resourceForm.get(['ram']).value,
      ssd: (this.resourceForm.get(['ssd']).value === 'Yes') ? true : false,
      diagonal: this.resourceForm.get(['diagonal']).value,
      dateIn: this.resourceForm.get(['dateIn']).value,
    }

    this.resourceService.updateResource(resource).subscribe((response: ResourceResponse) =>{
      if(response){
        const inventoryItem: updateInventoryItemRequest = {
          id:this.data.id,
          employeeId: employee.employeeId,
          resourceId: response.id,
          location: this.resourceForm.get(['location']).value,
          status: this.resourceForm.get(['status']).value,
          comment: this.resourceForm.get(['comment']).value


          
    
    
        }
        if(employee.employeeId===this.data.employeeId){

        
          this.resourceService.updateInventoryItem(inventoryItem).subscribe((itemResponse: InventoryItem) =>{
            if(itemResponse){

              this.dialogRef.close(itemResponse);
            }
          })
        }
        else
        {
          const request:deleteInventoryRequest={
            id:this.data.id,
            employeeId:employee.id,
            resourceId:response.id
          }
          
          //this.resourceService.deleteinv...Component
          //this.resourceService.addInventoryItem[Symbol].
          this.resourceService.deleteInventoryItem(request).subscribe((responsedel:deleteInventoryResponse)=>{

            const addItem:InventoryItemRequest={
            employeeId:responsedel.employeeId,
            resourceId:responsedel.id,
            location:responsedel.location,
            status:responsedel.status,
            comment:responsedel.comment
            };
            this.resourceService.addInventoryItem(addItem).subscribe((addResponse:InventoryItem)=>{

            });
            
          });
        }
      }
    })
  }
*/

}
