import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  theme: string;
  constructor() {
    this.theme = "light";
  }

  ngOnInit(): void {
  }

  saveSettings () {
    var e = (document.getElementById("theme")) as HTMLSelectElement;
    localStorage.setItem("theme", "" + e.value);
  }
}
