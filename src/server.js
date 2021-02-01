import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'

const app = express();
const hbs = exphbs();


app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home')
});

app.listen(3000, ()=> {
    console.log('SERVER ON!!!!')
})