import { ViewEncapsulation, Component, Input } from '@angular/core';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Stop-One';

  constructor (public signinService: SigninService) {}
}