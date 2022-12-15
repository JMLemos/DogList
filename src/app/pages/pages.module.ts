import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogListComponent } from './dog-list/dog-list.component';
import { MaterialModule } from '../material/material.module';
import { DogItemComponent } from './dog-list/dog-item/dog-item.component';
import { DogCreateComponent } from './dog-create/dog-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    DogListComponent,
    DogItemComponent,
    DogCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    DogListComponent,
    DogCreateComponent,
    PageNotFoundComponent
  ]
  
})
export class PagesModule { }
