# API de series de televisión

API para la gestión de series de televisión. Permite realizar operaciones CRUD sobre series de televisión.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm (o yarn) en tu sistema.

## Instalación

Instrucciones paso a paso para instalar tu aplicación. Por ejemplo:

```bash
git clone https://github.com/fabriconiglio/Test-Capabilia.git
cd ejercicioTres
npm install
```

# Configurar la bd en el archivo database.js
    
    ```javascript
    const pool = mysql.createPool({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'InnoDB'
    });
    ```

# Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```bash
node app.js
```

# Detalles de la API

La API de series de televisión permite realizar las siguientes operaciones:

Series:
- GET /api/series: Devuelve un listado de todas las series de televisión.
- POST /api/series: Crea una nueva serie de televisión.
- PUT /api/series/:id: Actualiza los datos de una serie de televisión.
- DELETE /api/series/:id: Elimina una serie de televisión.

Horarios y dias de emisión:
- GET /api/intervals: Devuelve un listado de todos los horarios de emisión.
- POST /api/intervals: Crea un nuevo horario de emisión.
- PUT /api/intervals/:id: Actualiza los datos de un horario de emisión.
- DELETE /api/intervals/:id: Elimina un horario de emisión.
- GET /api/intervals/by-series/:tv_series_id Devuelve un listado de todos los horarios de emisión de una serie de televisión.
