import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformRoutingModule } from './platform-routing.module';
import { MainDashboardModule } from '../core/dashboard/dashboard.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { GeneralTableModule } from '../shared/general-table/general-table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [

    DashboadComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MainDashboardModule,
    GeneralTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class PlatformModule { }
