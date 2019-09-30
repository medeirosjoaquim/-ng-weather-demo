import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { CardComponent } from './card/card.component';
import { WeatherBoardComponent } from './weather-board/weather-board.component';

const routes: Routes = [
  { path: '', component: ForecastComponent },
];


@NgModule({
  declarations: [ForecastComponent, CardComponent, WeatherBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WeatherModule { }
