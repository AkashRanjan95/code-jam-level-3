import { ChatServiceService } from './../chatscreen/chat-service.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  Username;
  Users = [];
  constructor(private route: Router, private chat: ChatServiceService) { }

  ngOnInit() {

  }
  open(user) {
    console.log(user);
    this.chat.getItem("",user);
    this.route.navigate(["/chatscreen"]);
  }
}
