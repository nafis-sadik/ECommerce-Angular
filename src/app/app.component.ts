import { Component } from '@angular/core';
import { SharedModuleModule } from '../app/shared-module/shared-module.module'
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECommerce-Angular';
}
