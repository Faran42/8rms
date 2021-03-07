import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, '../frontend/views/'));
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'main', layoutsDir: __dirname + '/../frontend/views/layouts/' }));
app.use(express.static(path.join(__dirname, '../../public')));
app.set('view engine', 'hbs');


app.use(routes);

export default app;