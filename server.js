const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

//routes
app.use(apiRoutes);
app.use(homeRoutes)

app.listen(PORT, () => console.log('App listening...'));