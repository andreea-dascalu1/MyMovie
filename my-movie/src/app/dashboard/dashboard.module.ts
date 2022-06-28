import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';

//Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    //Material
    MatMenuModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
