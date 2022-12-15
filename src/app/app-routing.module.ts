
import { DogCreateComponent } from './pages/dog-create/dog-create.component';
import { DogListComponent } from './pages/dog-list/dog-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home' , component: DogListComponent },
  { path: 'dog-create', component: DogCreateComponent },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
