import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ForeCastResult } from './forecast/forecast.interface';
import { environment } from '../../environments/environment';

const url = environment.openWeater.openWeatherApiUrl;
const key = environment.openWeater.openWeatherKEy;

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  // when the app goes to production it sould
  // be set in a cloud env variable ;
  // in the mvp return 5 days, later let the user set it
  constructor(private http: HttpClient) { }

  getForecast(lat, lon): Observable<ForeCastResult> {
    return this.http.get<ForeCastResult>
      (`${url}&lat=${lat}&lon=${lon}&cnt=3&appid=${key}`)
      .pipe(
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
