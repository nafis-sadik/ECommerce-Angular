import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
