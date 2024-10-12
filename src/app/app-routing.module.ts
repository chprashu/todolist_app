import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  { path: 'main', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/admin.module').then((x) => x.AdminModule) },
  {path: '', redirectTo: '/login', pathMatch:"full"},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
