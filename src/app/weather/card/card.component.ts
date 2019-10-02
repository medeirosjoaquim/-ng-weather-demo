import { Component, OnChanges, Input } from '@angular/core';
import { DailyForeCast } from '../forecast/forecast.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() weatherData: DailyForeCast;
  constructor() { }

  ngOnChanges() {
    console.log(this.weatherData);
  }

  convertUnixTimeToDate(time): string {
    const date = new Date(time * 1000);
    return  date.toUTCString();
  }

}
