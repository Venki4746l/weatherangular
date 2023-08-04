export interface WeatherData {
    id: number;
    city: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    temp_c: number;
    temp_f: number;
    wind_mph: number;
    wind_kph: number;
    humidity: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    condition: string;
    weatherImage: string;
  }
  