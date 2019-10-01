import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit {
  @Input() dataset;
  constructor() { }

  ngOnInit() {
  }

}
