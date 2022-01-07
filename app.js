const express = require('express');
var exphbs = require('express-handlebars');
const app = express();
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

app.use(express.static('public'))

app.get('/', (req, res) => {
res.render('main');
});

app.get('/posts/new', (req, res) => {
    res.render('posts-new');
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

