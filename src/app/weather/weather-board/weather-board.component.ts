import { Component, OnChanges, Input } from '@angular/core';
import { DailyForeCast } from '../forecast/forecast.interface';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnChanges {
  @Input() dataset: DailyForeCast[];
  @Input()cityName: string;
  constructor() { }

  ngOnChanges() {
    console.log(this.dataset);
  }

}
