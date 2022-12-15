import { DogCreateComponent } from './pages/dog-create/dog-create.component';
import { DogListComponent } from './pages/dog-list/dog-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home' , component: DogListComponent },
  { path: 'dog-create', component: DogCreateComponent },
  { path: '**' , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
