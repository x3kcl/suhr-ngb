import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
