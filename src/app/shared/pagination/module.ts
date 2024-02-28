import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationComponent } from './pagination.component';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: []
})
export class PaginatorModule { }
