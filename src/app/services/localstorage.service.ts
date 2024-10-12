import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ENCRYPT_KEY } from '../shared/_global_consts';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getId(key: string){
    let number = this.getItem(key);
    if(number != null){
      let newId = Number(number);
      newId++;
      this.setItem(newId, key)
      return newId;
    }else{
      this.setItem(1, key);
      return 1;
    }
  }

  getItem(key: string){
    let items = localStorage.getItem(key);
    if(items != null){
      let decryptItem = CryptoJS.AES.decrypt(items, ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptItem);
    }
    return items;
    
  }
  
  setItem(items: any, key: string){
    const encryptData = this.encryptData(items);
    localStorage.setItem(key, encryptData);
  }

  encryptData(items: any){
    return CryptoJS.AES.encrypt(JSON.stringify(items), ENCRYPT_KEY).toString();
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }

  
}
