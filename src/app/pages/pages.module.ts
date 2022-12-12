import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogListComponent } from './dog-list/dog-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DogListComponent
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
