# Memoria App
Memoria App es un juego de memoria en línea, no es necesario registrarse para poder jugar.
Existen diferentes tamaños de tablero según la dificultad deseada.
Al terminar la partida ingresa un nickname para agregar tus datos (tiempo e intentos) al ranking global!
## Comenzando 🚀
La aplicación usa el servicio firestore de Firebase para almacenar los records de los jugadores, por lo que deberás crear una aplicación de Firebase y configurar el servicio firestore, además debes agregar el objeto de configuración que proporciona Firebase para conectar la aplicación, para ello crea el archivo src/environments/firebase.environment.ts, y agrega la siguiente configuración:
```
export const firebaseConfig = {
  firebaseConfig: {
    apiKey: 'tu-api-key',
    authDomain: 'dominio-app.com',
    projectId: 'tu-project-id',
    storageBucket: 'storage-bucket',
    messagingSenderId: 'message-sender',
    appId: 'app-id',
    measurementId: 'measurement-id',
  },
};
```
### Pre-requisitos 📋

* [Node JS](https://nodejs.org/en/)
* [Angular CLI](https://cli.angular.io)
### Instalación 🔧
En la raíz del proyecto:
```
ng serve -o
```
Para levantar la aplicación en la dirección por defecto: http://localhost:4200
## Despliegue 📦
En la raíz del proyecto ejecuta:
```
ng build --prod
```
Los archivos estáticos para desplegar a tu servidor se generarán en el directorio dist/tramos-horarios/

## Construido con 🛠️

* [Angular 11](https://cli.angular.io) - El framework web usado para frontend
* [Node Package Manager](https://nodejs.org/en/) - Manejador de dependencias
