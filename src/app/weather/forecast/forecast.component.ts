import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
public receivedData: JSON;

  constructor() { }

  ngOnInit() {
  }

  foundPlace(result: JSON) {
    console.log(result);
    this.receivedData = result;
    return result;
  }

}
