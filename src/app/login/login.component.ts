
import { ChatServiceService } from './../chatscreen/chat-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private chat: ChatServiceService) { }

  ngOnInit() {
  }
  login(username) {
    this.chat.satItem(xusername);
      this.route.navigate(["/user-list"]);
  }

}
