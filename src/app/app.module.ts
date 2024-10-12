import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './pages/admin/components/todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/components/dashboard/dashboard.component';
import { ToastModule } from 'primeng/toast'
import { MessageService} from 'primeng/api';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './pages/error/error.component';
import { MatButtonModule } from '@angular/material/button'
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    ButtonModule,
    RippleModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
