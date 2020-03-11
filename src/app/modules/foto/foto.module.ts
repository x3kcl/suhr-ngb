import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
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
        component: FotoComponent
      }
    ])
  ],
  declarations: [
    FotoComponent
  ],
  exports: [
    FotoComponent
  ]
})
export class FotoModule { }
