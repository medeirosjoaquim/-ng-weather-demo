import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DailyForeCast } from './forecast.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})


export class ForecastComponent implements OnInit {
  dailyForecast: DailyForeCast[];
  forecastLocal: string;

  constructor(private weatherService: WeatherService, ) { }

  ngOnInit() {
  }
  getForecast(lat, lon) {
    this.weatherService.getForecast(lat, lon)
      .subscribe(
        result => {
          this.forecastLocal = result.city.name;
          this.dailyForecast = result.list;
        }
      );
  }
  foundPlace(result: any) {
    console.log(result);
    this.getForecast(result.latlng.lat, result.latlng.lng);
    return result;
  }

}
