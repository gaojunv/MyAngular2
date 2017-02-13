import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, SharedModule, ButtonModule } from 'primeng/primeng';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataTableModule,
    SharedModule,
    ButtonModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
