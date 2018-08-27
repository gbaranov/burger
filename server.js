const express = require('express');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const burgersController = require('./controllers/burgers_controller.js');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'views')));
app.use(burgersController);

app.listen(app.get('port'), function() {
    console.log('Port:' + app.get('port'));
});


