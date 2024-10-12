import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = 'admin';
  password: string = 'admin@123';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedin()){
      this.router.navigate(['main'])
    }
  }

  LoginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(loginForm: any){
    if(loginForm.valid){
      let res = this.loginService.login(loginForm.value);
      if(res.responseId == true){
        this.messageService.add({key: 'msg', severity: 'success', summary: 'Success', detail: res.response});
        this.router.navigate(['main/home']);
      }else if(res.responseId == false){
        this.messageService.add({key: 'msg', severity: 'error', summary: 'Error', detail: res.response});
        this.LoginForm.reset();
      }
    }
  }

}
