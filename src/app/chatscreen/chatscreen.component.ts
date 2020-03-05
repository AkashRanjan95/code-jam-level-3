import { ChatServiceService } from './chat-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.component.html',
  styleUrls: ['./chatscreen.component.css']
})
export class ChatscreenComponent implements OnInit {
  // Username;
  Users;
  key;
  constructor() { }
  Send(message) {
    console.log(message);

    //sessionStorage.setItem(JSON.stringify(message));
  }
  ngOnInit() {

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      this.Users.push(key);

      //console.log(key);
      let data = JSON.parse(localStorage.getItem(key));
      //     console.log(data);
      //     this.Username=data;
      //    // this.Users=key;
      //   }
      //   console.log(this.Users);
      // }
      //sessionStorage.setItem("username", username.value);
    }
  }
}