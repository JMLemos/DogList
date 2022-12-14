import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
