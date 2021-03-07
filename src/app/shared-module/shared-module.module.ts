import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    MatToolbarModule
  ],
  exports:[
    NavBarComponent,
  ]

})
export class SharedModuleModule { }
