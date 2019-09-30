import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: '', component: ForecastComponent },
];


@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WeatherModule { }
