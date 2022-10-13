const express = require('express');
const routes = require('.routes');
const db = require('.config/connection');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log('Server runnning on port ${PORT}');
    })
})