import { Component, Input } from '@angular/core';
import { DailyForeCast } from '../forecast/forecast.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() weatherData: DailyForeCast;
  constructor() { }

  convertUnixTimeToDate(time): string {
    const date = new Date(time * 1000);
    return  date.toUTCString();
  }

  ImgUrl(icon) {
    const url =
      `https://openweathermap.org/img/w/${icon}.png`;
    return url;
  }

}
