import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemComponent
      }
    ])
  ],
  declarations: [
    ItemComponent
  ],
  exports: [
    ItemComponent
  ]
})
export class ItemModule { }
