import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Forecast } from './forecast/forecast.interface';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather`;
  // when the app goes to production it sould
  // be set in a cloud env variable ;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Forecast[]> {
    return this.http.get<Forecast[]>(this.openWeatherUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
