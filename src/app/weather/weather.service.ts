import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherData } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url: string = '../../assets/weather.json';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(this.url).pipe(
      map((data: WeatherData[]) => {
        return data.filter((weather) =>
          weather.city.toLowerCase() === cityName.toLowerCase()
        );
      })
    );
  }
}
