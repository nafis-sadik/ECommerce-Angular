import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports:[
    NavBarComponent
  ]

})
export class SharedModuleModule { }
