export interface DailyForeCast {
  dt: string;
  main: {
    temp: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    sea_level: string;
    grnd_level: string;
    humidity: string;
    temp_kf: string;
  };
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: string;
  };
  wind: {
    speed: string;
    deg: string;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface CityInfo {
  id: string;
  name: string;
  coord: {
    lat: string;
    lon: string;
  };
  country: string;
  timezone: string;
  sunrise: string;
  sunset: string;
}

export interface ForeCastResult {
  city: CityInfo;
  cnt: number;
  cod: string;
  list: DailyForeCast[];
  message: string;
}
