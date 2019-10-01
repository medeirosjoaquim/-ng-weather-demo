import { ForecastComponent } from './forecast.component';

export interface Forecast {
  coord: {
    lon: string;
    lat: string
  };
  weather: [
    {
      id: string;
      main: string,
      description: string,
      icon: string
    }
  ];
  base: string;
  main: {
    temp: string;
    pressure: string;
    humidity: string;
    temp_min: string;
    temp_max: string;
  };
  visibility: string;
  wind: {
    speed: string;
    deg: string;
  };
  clouds: {
    all: string;
  };
  dt: string;
  sys: {
      type: string;
      id: string;
      message: string;
      country: string;
      sunrise: string;
      sunset: string;
  };
  timezone: string;
  id: string;
  name: string;
  cod: string;
}

const  initializeForecast = (): Forecast => {
  return {
    coord: {
      lon: '',
      lat: ''
    },
    weather: [
      {
        id: '',
        main: '',
        description: '',
        icon: ''
      }
    ],
    base: '',
    main: {
      temp: '',
      pressure: '',
      humidity: '',
      temp_min: '',
      temp_max: '',
    },
    visibility: '',
    wind: {
      speed: '',
      deg: '',
    },
    clouds: {
      all: '',
    },
    dt: '',
    sys: {
        type: '',
        id: '',
        message: '',
        country: '',
        sunrise: '',
        sunset: '',
    },
    timezone: '',
    id: '',
    name: '',
    cod: '',
  };
};
