const express = require('express');
const app = express();
const PORT = 3001;
const indexRoutes = require('./src/routes/indexRoutes.js');
const pagesRoutes = require('./src/routes/pagesRoutes.js');

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());


app.use('/', indexRoutes);
app.use('/', pagesRoutes);


app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));