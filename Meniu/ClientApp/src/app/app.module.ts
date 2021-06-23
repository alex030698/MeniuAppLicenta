import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {NavBarComponent} from './nav-bar/nav-bar.component'

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table' 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule }   from '@angular/common';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
import { IntroComponent } from './intro/intro.component';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditOrderComponent } from './fetch-data/edit-order/edit-order.component';
import { AddMeniuComponent } from './fetch-data/add-meniu/add-meniu.component';
import { DeleteMeniuComponent } from './fetch-data/delete-meniu/delete-meniu.component';
import { EditMeniuComponent } from './fetch-data/edit-meniu/edit-meniu.component';
import {MatExpansionModule} from '@angular/material/expansion';

import {  ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    IntroComponent,
    NavBarComponent,
    EditOrderComponent,
    AddMeniuComponent,
    DeleteMeniuComponent,
    EditMeniuComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    MatDividerModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    DragDropModule,
    jqxKanbanModule,
    CommonModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatExpansionModule,
    
    RouterModule.forRoot([
      {path:'',children:[{path:'',component:IntroComponent}]},
      {path: 'nav-bar', component:NavBarComponent},
      {path : 'intro' , component:IntroComponent},
      {path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard]  },
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
