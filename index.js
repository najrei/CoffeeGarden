const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
const port = 8000;

app.engine('handlebars', engine({
   defaultLayout: 'planB.handlebars',
   layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'handlebars');
app.set("views", "./views/layouts");


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`App listening to port ${port}`));
