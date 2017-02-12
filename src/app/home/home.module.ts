/**
 * Created by GAO on 2017/1/1.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {  DataTableModule, SharedModule } from 'primeng/primeng';

import { HomeComponent } from './home.component';

import { HomeRoutingModule }       from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
