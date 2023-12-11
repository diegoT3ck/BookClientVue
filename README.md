# Documentación BookStore Vue 3 con Vuetify [ Test ]

<img src="https://i.postimg.cc/P5sP1W1c/book.png"  width="300" 
height="auto">

Esta documentación describe los pasos para ejecutar y comprender el CRUD de libros desarrollado en Vue 3 con Vuetify. La aplicación utiliza Vuex para la gestión del estado, Vue Router para la navegación, Axios para las solicitudes HTTP, Vue3 Toastify para mostrar mensajes de usuario, y Dotenv para la configuración de variables de entorno.

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina antes de comenzar.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/diegoT3ck/BookClientVue
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd BookClientVue
    ```

3. Instala las dependencias:

    ```bash
    npm install 
    ```

## Configuración Cliente

1. Crea un archivo `.env` en el directorio raíz del proyecto para configurar las variables de entorno:
2. `VUE_APP_API_BOOKS_URL` será el host de la API

    ```dotenv
    VUE_APP_API_BOOKS_URL=http://localhost:3000
    ```

    Asegúrate de ajustar `VUE_APP_API_BOOKS_URL` según la URL de tu API de backend.

2. Abre el archivo `src/config.js` para utilizar la variable de entorno en la configuración de la API:

    ```javascript
    // src/config.js
    export const API_URL = process.env.VUE_APP_API_BOOKS_URL + '/api/libros';
    ```

## Ejecución

1. Inicia la aplicación en modo de desarrollo:

    ```bash
    npm run serve
    ```

2. Abre tu navegador y visita [http://localhost:8080](http://localhost:8080).

## Uso

La aplicación utiliza las siguientes características:

- **Ver Libros:** Visualiza la lista completa de libros.
- **Agregar Libro:** Añade un nuevo libro a la lista.
- **Editar Libro:** Modifica la información de un libro existente.
- **Eliminar Libro:** Elimina un libro de la lista.
- Busca Libro: Busca un libro por Titulo o Autor

La interfaz de usuario proporciona una experiencia agradable, y los mensajes de error son manejados de manera efectiva.

## Estructura del Proyecto

```
|-- src 
| |-- assets | 
|-- components | 
|-- views | 
|-- store (Vuex) | 
|-- router (Vue Router) | 
|-- App.vue | 
|-- main.js 
|-- public 
|-- README.md 
|-- package.json 
|-- .env`
```


- **src:** Contiene el código fuente de la aplicación.
- **store:** Contiene los módulos Vuex para la gestión del estado.
- **router:** Configuración de Vue Router.
- **public:** Contiene archivos estáticos.

## Tecnologías Utilizadas

- [Vue 3](https://v3.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Vue3 Toastify](https://github.com/ghosind/vue-toastify)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Contribuir

Si deseas contribuir al proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu contribución: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y commitea: `git commit -m "Añade nueva funcionalidad"`.
4. Haz push a tu rama: `git push origin feature/nueva-funcionalidad`.
5. Crea un pull request en GitHub.
