import { GenderDirective } from './directives/gender.directive';
import { MaterialModule } from './../material/material.module';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GenderPipe } from './pipes/gender.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    GenderPipe,
    GenderDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    GenderPipe,
    GenderDirective
  ]
})
export class SharedModule { }
