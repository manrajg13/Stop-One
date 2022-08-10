import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup.model';
import { SignupService } from 'src/app/services/signup.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: Signup = {
    username: '',
    password: '',
    email: ''
  };
  constructor(private signupService: SignupService, private appComponent: AppComponent) { }
  ngOnInit(): void {
  }
  signUp(): void{
    const data = {
      username: this.signup.username,
      password: this.signup.password,
      email: this.signup.email
    };
    this.signupService.create(data).subscribe(
        error => {
          console.log(error);
        }
    );
    alert("User has been registered successfully!");
    this.appComponent.signedIn = true;
    window.location.href = "http://localhost:4200/home";
  }

}
