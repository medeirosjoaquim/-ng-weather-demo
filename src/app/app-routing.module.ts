import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
      path: '',
      component: ForecastComponent,
    },
    {
      path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
