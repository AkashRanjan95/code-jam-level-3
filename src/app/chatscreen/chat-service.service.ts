import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ChatServiceService {
  public data: any[];
  constructor(private http: HttpClient) {
    //sessionStorage.setItem("username",username.value);
    // localStorage.setItem(username.value,JSON.stringify(message));
  }
  satItem(key, value): void {
    let message = { message: "You dont have any messages.", sender: "create friends." };
    sessionStorage.setItem("username", value.value);
    localStorage.setItem(value.value, JSON.stringify(message));
  }
  getItem(key, value): void {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      this.data.push(key);
    }

  }

}
