import { Component, Input, OnInit } from '@angular/core';
import { TableCityInfo, WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  city : string = "Grenoble"
  constructor(private weatherService : WeatherService){

  } 
  cityInfo? : TableCityInfo
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getCityInfoData(this.city).subscribe(
      {
        next : (res) => {
          this.cityInfo = res
          console.log(res)
        }
      }
    )

    this.weatherService.getWeatherData(45.16667,5.71667).subscribe(
      {
        next: (res) => {
          this.weatherData = res
          console.log(res)
        }
      }
    )
  }


  onClickSubmit(){
    this.weatherService.getCityInfoData(this.city).subscribe(
      {
        next : (res) => {
          this.cityInfo = res
          console.log(res)
        }
      }
    )

    this.weatherService.getWeatherData(this.cityInfo![0].lat,this.cityInfo![0].lon).subscribe(
      {
        next: (res) => {
          this.weatherData = res
          console.log(res)
        }
      }
    )
  }

  convertTempToCelcius(temp : number) : number{
    return temp-273.15
  }

}
