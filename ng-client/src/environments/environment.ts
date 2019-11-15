// This file can be replaced during build.sh by using the `fileReplacements` array.
// `ng build.sh --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env: 'local',
  host: 'http://localhost:4200',
  api: 'http://localhost:3000/api',
  socket: 'wss://localhost:3003',
  publicPath : 'http://localhost:3000/public',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
