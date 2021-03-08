import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from  '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  exports:[
    NavBarComponent,
  ]

})

export class SharedModuleModule {
  serverResponseJson: string = JSON.stringify({
    "Category_1": [
      "SubCategory_1",
      "SubCategory_2",
      "SubCategory_3"
    ],
    "Category_2": null,
    "Category_3": null,
    "Category_4": [
      "SubCategory_1",
      "SubCategory_2",
      "SubCategory_3"
    ]
  });
  CategoryList: any = JSON.parse(this.serverResponseJson);
}
