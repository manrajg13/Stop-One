import { ViewEncapsulation, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'Stop-One';
  signedIn = false;

  logout() {
    if (this.signedIn) {
      this.signedIn = false;
      this.ngOnInit();
    }
  }

  ngOnInit() {
    console.log(this.signedIn);
    if (this.signedIn) {
      document.getElementById('sign_in')!.innerHTML = "<button>SIGN OUT</button>";
      document.getElementById('sign_up')!.innerHTML = "";
      document.getElementById('user')!.innerHTML = "<button id=\"account\"><i class=\"fa fa-user\"></i></button>"
    }
    else {
      document.getElementById('sign_in')!.innerHTML = "<button>SIGN IN</button>";
      document.getElementById('sign_up')!.innerHTML = "<button>SIGN UP</button>";
      document.getElementById('user')!.remove();
    }
  }
}
