// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  openWeater: {
    openWeatherKEy: `ca8ac29b2be0f1c6cf2c5ae6d3cc5826`,
    openWeatherApiUrl: `http://api.openweathermap.org/data/2.5/forecast?&lang=en&units=metric`,
    openWeatherDailyApiUrl: `http://api.openweathermap.org/data/2.5/forecast/daily?&lang=en&units=metric`,
  },
  algolia: {
    algoliaPlacesId: `plYLJA6WH2HP`,
    algoliaPlacesKey: `fb7e3a103ac9a2e341b5ce364c05998e`,
  }



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
