import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TodolistComponent } from './pages/todolist/todolist.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'todo', component:TodolistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
