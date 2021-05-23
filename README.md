# CollegeDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

This project consists of 4 components namely 
1) app component
2) login component
3) register component
4) college-details component

The college details are stored in the file `db.json` in the folder `json-server`. When we run `json-server --watch db.json` , we can access the college details.
In this project I retrived the details from `json-server` using a service **database-service** and displayed using college-details.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
