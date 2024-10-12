import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children:[
      {path:"home", component: HomeComponent},
      {path: "todolist", component: TodolistComponent},
      {path: " ", redirectTo: "main/home", pathMatch:"full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
