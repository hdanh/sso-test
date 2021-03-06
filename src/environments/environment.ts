// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_HOST: 'https://singhealthid.azurewebsites.net/connect/token',
  AUTH_SCOPE: 'mycare.read mycare.write',
  AUTH_CLIENT_ID: 'mycare',
  AUTH_CLIENT_SECRET: '511536EF-F270-4058-80CA-1C89C192F69A',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
