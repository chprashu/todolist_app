import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
    this.messageService.add({key: 'msg', severity: 'success', summary: 'Success', detail: "Successfully Loggod Out"});
    this.router.navigate(['login']);
  }

}
