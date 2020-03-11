import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemsComponent
      }
    ])
  ],
  declarations: [
    ItemsComponent
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
