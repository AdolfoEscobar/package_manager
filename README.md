# Aplicación con NPM

Esta es una aplicación Node.js que utiliza varias herramientas y paquetes para su desarrollo. A continuación, se detallan los comandos para ejecutar y trabajar con la aplicación.

## Ejecución de la Aplicación

Para iniciar la aplicación, utiliza el siguiente comando:

node index.js

O bien, para usar el script definido en `package.json`, puedes ejecutar:

npm start

## Dependencias y Comandos

### ESLint

Para verificar el estilo de código y posibles errores con ESLint, utiliza:

npm run lint

### Mocha

Para ejecutar las pruebas utilizando Mocha, usa:

npm run dev

### Logger

Para ejecutar las pruebas de logging, usa:

npm run test

### Supervisor

Para desarrollar con la ayuda de `supervisor` (para recargar la aplicación automáticamente), ejecuta:

npm run dev

## Notas

- Asegúrate de tener todas las dependencias instaladas ejecutando `npm install` antes de usar estos comandos.
- Los comandos `npm run dev` y `npm run test` pueden estar configurados para tareas distintas, verifica el archivo `package.json` para entender mejor su configuración.

## Adolfo Escobar Pereyra 362839
