import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavigationComponent
      }
    ])
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
