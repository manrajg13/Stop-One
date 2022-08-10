import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Windsor&units=metric&appid=32b9e7fa1481937682d0c25a214b9f24", {
            "method": "GET",
            "headers": {
            }
            })
        .then(response => {
            return response.json();
        }).then(function(response) {
            var div = document.createElement("div")
            div.innerHTML = "Weather in Windsor<br>" + response.main.temp + " Degrees - " + response.weather[0].description;
            document.body.appendChild(div);
        });
  }

}
