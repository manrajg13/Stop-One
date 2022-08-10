import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Signin } from 'src/app/models/signin.model';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin: Signin = {
    username: '',
    password: ''
  };

  constructor(public signinService: SigninService) {}

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
