import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { CardComponent } from './card/card.component';
import { WeatherBoardComponent } from './weather-board/weather-board.component';
import { SearchPlaceComponent } from './search-place/search-place.component';

const routes: Routes = [
  { path: '', component: ForecastComponent },
];


@NgModule({
  declarations: [ForecastComponent, CardComponent, WeatherBoardComponent, SearchPlaceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WeatherModule { }
