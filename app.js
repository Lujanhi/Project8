const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Config = require('./config/config');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/books'));

app.use('/books', require('./routes/books'));


// ERROR PAGE
app.use((request, response, next) => {
    const err = new Error("error");
    err.status = 404;
    next(err)
    response.render('error')
    console.log(err);
});

app.use((err, request, response, next) => {
    response.locals.error = err
    response.status(err.status)
});


//  ALLOWS YOU TO SYNCHRONIZE THE CONFIGUARATION BETWEEN A PAIR OF SWITCHES IN A NETWORK 
// GOES TO THE CONFIG.JS FILE AND LISTEN TO PORT 3000
Config.sync()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => console.log('Application running on localhost:3000'))
    })