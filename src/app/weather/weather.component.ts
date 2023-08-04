import { Component, OnInit } from '@angular/core';
import { WeatherData } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  cityName: string = 'Visakhapatnam';
  weatherdata?: WeatherData[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  onSubmit() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  getWeather(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe((data) => {
      this.weatherdata = data;
      console.log(this.weatherdata.length);
    });
  }
}
