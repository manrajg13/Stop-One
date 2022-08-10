import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Stop-One';
  localLogin: any;

  constructor (public signinService: SigninService) {
    this.localLogin = localStorage.getItem('loggedIn');
    console.log(this.localLogin);
  }

  ngOnInit(): void {
    this.localLogin = localStorage.getItem('loggedIn');
    console.log(this.localLogin);
  }
}