const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Importar rutas
const seriesRoutes = require('./routes/series');
const intervalsRoutes = require('./routes/intervals');

// Usar las rutas con prefijos específicos
app.use('/api/series', seriesRoutes);
app.use('/api/intervals', intervalsRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

