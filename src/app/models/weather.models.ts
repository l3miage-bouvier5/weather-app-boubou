export interface WeatherData {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    rain: Rain
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  
  export interface Wind {
    speed: number
    deg: number
    gust: number
  }
  
  export interface Rain {
    "1h": number
  }
  
  export interface Clouds {
    all: number
  }
  
  export interface Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }



export type TableCityInfo = CityInfos[]

export interface CityInfos {
  name: string
  local_names: LocalNames
  lat: number
  lon: number
  country: string
  state?: string
}

export interface LocalNames {
  af?: string
  ar?: string
  ascii: string
  az?: string
  bg?: string
  ca?: string
  da?: string
  de?: string
  el?: string
  en: string
  eu?: string
  fa?: string
  feature_name: string
  fi?: string
  fr?: string
  gl?: string
  he?: string
  hi?: string
  hr?: string
  hu?: string
  id?: string
  it?: string
  ja?: string
  la?: string
  lt?: string
  mk?: string
  nl?: string
  no?: string
  pl?: string
  pt?: string
  ro?: string
  ru?: string
  sk?: string
  sl?: string
  sr?: string
  th?: string
  tr?: string
  vi?: string
  zu?: string
}
  