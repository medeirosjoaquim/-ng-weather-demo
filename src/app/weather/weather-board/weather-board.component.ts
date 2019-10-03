import { Component, Input } from '@angular/core';
import { DailyForeCast } from '../forecast/forecast.interface';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent {
  @Input() dataset: DailyForeCast[];
  @Input()cityName: string;
  constructor() { }
}
