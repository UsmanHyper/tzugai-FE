import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformRoutingModule } from './platform-routing.module';
import { MainDashboardModule } from '../core/dashboard/dashboard.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { GeneralTableModule } from '../shared/general-table/general-table.module';



@NgModule({
  declarations: [

    DashboadComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MainDashboardModule,
    GeneralTableModule
  ]
})
export class PlatformModule { }
