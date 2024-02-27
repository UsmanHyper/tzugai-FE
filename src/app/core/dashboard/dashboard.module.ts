import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainDashboardComponent
  ]
})
export class MainDashboardModule { }
