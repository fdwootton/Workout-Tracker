const express = require('express');
const mongoose= require('mongoose');

const apiRoutes = require('./routes/apiRoutes');
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

//mongoose db connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//routes
app.use(apiRoutes);
app.use(homeRoutes);

//create server
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));