import { Component, Inject, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { SigninService } from '../services/signin.service';
import { ActivatedRoute } from '@angular/router';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usern: string;
  reported: boolean;

  user: Users = {
    username: '',
    password: '',
    email: ''
  };

  constructor(public usersService: UsersService, public signinService: SigninService, private route: ActivatedRoute) { 
    console.log(localStorage.getItem("currUser"));
    this.usern = "" + localStorage.getItem("currUser");
    this.reported = false;
  }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params['_id']);
  }

  getUser(_id: ObjectId) {
    this.usersService.get(_id)
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  reportUser() {
    this.reported = true;
  }
}
