import { RouterModule } from '@angular/router';
import { GenderDirective } from './directives/gender.directive';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GenderPipe } from './pipes/gender.pipe';
import { DogFormComponent } from './dog-form/dog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    GenderPipe,
    GenderDirective,
    DogFormComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    GenderPipe,
    GenderDirective,
    DogFormComponent
  ]
})
export class SharedModule { }
