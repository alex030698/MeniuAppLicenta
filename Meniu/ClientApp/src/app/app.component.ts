import { Component } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
       import {DataSource} from '@angular/cdk/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'app';
  public static get baseURL(): string {return "http://localhost:8080";}
}
