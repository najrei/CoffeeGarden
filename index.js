const express = require('express');
const app = express();
const port = 8000;
const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
   layoutsDir: __dirname + '/views/layouts',
   }));

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});


app.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
