import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogListComponent } from './dog-list/dog-list.component';
import { MaterialModule } from '../material/material.module';
import { DogItemComponent } from './dog-list/dog-item/dog-item.component';

@NgModule({
  declarations: [
    DogListComponent,
    DogItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DogListComponent
  ]
  
})
export class PagesModule { }
