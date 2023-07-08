const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
const port = 8000;

app.engine('handlebars', engine({
   defaultLayout: 'planB.handlebars',
   layoutsDir: __dirname + '/views/layouts',
   partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

app.get('/suche', (req, res) => {
    res.render('main', {layout: 'suche'})
}), 

app.post('/suche', (req, res) => {
    //todo
})

app.listen(port, () => console.log(`App listening to port ${port}`));
