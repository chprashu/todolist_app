import { Injectable } from '@angular/core';
import { AUTH_ID } from '../shared/_global_consts';
import { checkEmpty } from '../shared/_common_functions';
import { LocalstorageService } from './localstorage.service';
import { FinalRes } from '../shared/required-models.modal';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private response!: FinalRes;

  constructor(
    private storageService: LocalstorageService,
  ) { }


  isLoggedin():boolean{
    if(checkEmpty(localStorage.getItem(AUTH_ID))){
      return true;
    }else{
      return false;
    }
  }

  login(form: any): FinalRes{
    if(form.username == 'admin' && form.password == 'admin@123'){
      let token = "nkjhYUgdjgsdhfbjha86354y2837skdhlskd==-sodufu23!";
      this.storageService.setItem(token, AUTH_ID);
      this.response = {response: "Successfully Logged In..!", responseId: true};
      return this.response;
    }else{
      return this.response = {response: "Bad Credentials..!", responseId: false};
    }
  }

  logout(){
    this.storageService.removeItem(AUTH_ID);
  }
}
