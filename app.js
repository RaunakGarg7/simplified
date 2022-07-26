const express = require('express');
const path = require('path');
const filterRoutes = require('./route.js');

const app = express();
const port = process.env.PORT || 3000;
const pathDirectory = path.join(__dirname,'./public');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(pathDirectory));

app.use('/',filterRoutes);

app.listen(port, () => {
    console.log(`server started on ${port}`);
});