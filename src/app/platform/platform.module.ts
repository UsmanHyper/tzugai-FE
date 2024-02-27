import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformRoutingModule } from './platform-routing.module';
import { MainDashboardModule } from '../core/dashboard/dashboard.module';
import { DashboadComponent } from './dashboad/dashboad.component';



@NgModule({
  declarations: [
  
    DashboadComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MainDashboardModule,
  ]
})
export class PlatformModule { }
