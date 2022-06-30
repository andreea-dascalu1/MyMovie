import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';

//Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddNewMovieComponent } from './add-new-movie/add-new-movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import {MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    MovieListComponent,
    AddNewMovieComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    //Material
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class DashboardModule { }
