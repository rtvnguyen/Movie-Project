// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyABPF6LIYw50nvmQAGa6OIlofIpGJ-LjQw",
    authDomain: "movietracker-393cc.firebaseapp.com",
    databaseURL: "https://movietracker-393cc.firebaseio.com",
    projectId: "movietracker-393cc",
    storageBucket: "movietracker-393cc.appspot.com",
    messagingSenderId: "1093480063860"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
