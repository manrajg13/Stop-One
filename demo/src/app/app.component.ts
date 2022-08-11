import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'Stop-One';

  constructor (public signinService: SigninService) { }

  ngOnInit(): void { }
}