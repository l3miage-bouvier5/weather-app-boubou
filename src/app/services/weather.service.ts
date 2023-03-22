import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableCityInfo, WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(lat : number , lon : number):Observable<WeatherData>{
    return this.httpClient.get<WeatherData>("https://api.openweathermap.org/data/2.5/weather",{
      params : new HttpParams().set('lat',lat).set('lon',lon).set('appid','110cec255623333abb0892ce290f87a2')
    })
  }


  getCityInfoData(cityCame : string) : Observable<TableCityInfo>{
    return this.httpClient.get<TableCityInfo>("http://api.openweathermap.org/geo/1.0/direct",{
      params : new HttpParams().set("q" , cityCame).set("appid","110cec255623333abb0892ce290f87a2")
    })
  }
}
