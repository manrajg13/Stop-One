import { Component, OnInit } from '@angular/core';
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
  constructor(private signinService: SigninService) { }
  ngOnInit(): void {
  }
  signedIn(): void{
    const data = {
      username: this.signin.username,
      password: this.signin.password
    };
    this.signinService.create(data).subscribe(
        error => {
          console.log(error);
        }
    );
    alert("User has been logged in successfully!");
    window.location.href = "http://localhost:4200/home";
  }

}
