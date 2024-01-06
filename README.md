# Numi Tejidos Website

Este proyecto es el sitio web institucional de Numi Tejidos
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Eslint - Husky - commitLint

En el proyecto se utiliza Husky y commitLint para evaluar el cumplimiento de las reglas del Eslint en cada commit y asegurar el formato de los commits.

Para saber como debemos escribir los mensajes respetando una estructura y normas sencillas tenemos que tener en cuenta lo siguiente:
```
feat: lectura de código QR para extraer datos de contacto
^--^  ^------------^
|     |
|     +-> Mensaje de commit (tiene que empezar en minúsculas).
|
+-------> Type: chore, docs, feat, fix, refactor, style, ó test.
```

Propósito de cada tipo:

- `feat`: (una nueva feature (funcionalidad) del usuario, no será cuando hacemos un build)
- `fix`: (solución a un bug surgido en el código, no será cuando hacemos build)
- `docs`: (cambios en la documentación)
- `style`: (formateo, añadir semicolons, etc; sin cambios en el código de producción)
- `refactor`: (refactorizar código de producción, ej. renombar una variable)
- `test`: (añadir test que faltan, refactorizar tests; sin cambios en el código de producción)
- `chore`: (actualizar tareas grunt, etc; sin cambios en el código de producción)
- `wip`: (Work in progress)

> Esta estructura es siguiendo la guía de estilo convencional de
> escritura de commit de Git:
> https://www.conventionalcommits.org/en/v1.0.0/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
