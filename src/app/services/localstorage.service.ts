import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getId(key: string){
    if(localStorage.getItem(key) != null){
      let number = localStorage.getItem(key);
      let newId = Number(number);
      newId++;
      localStorage.setItem(key, JSON.stringify(newId));
      return newId;
    }else{
      localStorage.setItem(key, JSON.stringify(1));
      return 1;
    }
  }

  getItem(key: string){
    let items = localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  }
  
  setItem(items: any[], key: string){
    localStorage.setItem(key, JSON.stringify(items));
  }
}
