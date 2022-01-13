
const Post = require('./models/post');
const express = require('express');
var exphbs = require('express-handlebars');

require('./data/messageboard-db');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'))





const port = 3000;

var handlebars = exphbs.create({
    helpers: {
        sayHello: function () { alert("Hello World") },
        getStringifiedJson: function (value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'index',
    partialsDir: ['views/partials/']
});


//Sets handlebars configurations
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');








require('./controllers/posts') (app);





//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));



