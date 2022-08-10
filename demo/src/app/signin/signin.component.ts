import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ObjectId } from 'mongodb';
import { Signin } from 'src/app/models/signin.model';
import { SigninService } from 'src/app/services/signin.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usern: string = '';

  signin: Signin = {
    username: '',
    password: ''
  };

  constructor(public signinService: SigninService, public userService: UsersService) {}

  ngOnInit(): void { }
  
  signedIn(): void {
    const data = {
      username: this.signin.username,
      password: this.signin.password
    };
    this.signinService.create(data).subscribe(
      error => {
        console.log(error);
      }
    );
    
    localStorage.setItem("currUser", '' + this.signin.username);
    this.signinService.login();
  }
}
