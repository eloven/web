# Material-Pro

## Use server

>  server  -- node server

    cd server
    npm install
    npm run watch

    

## Use Electron

- Angular v7.1.0
- Electron v3.0.2
- Electron Builder v20.28.1

## Getting Started

Install dependencies with npm :

``` bash
    npm install
```

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

## Browser mode

 `npm run ng:serve:web`.  
Note that you can't use Electron or NodeJS native libraries in this case.
 `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.
