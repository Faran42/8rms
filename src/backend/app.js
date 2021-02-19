import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'

import router from '../backend/routes'

const app = express();
const hbs = exphbs();

app.use(express.json());

app.set('views', path.join(__dirname, '../frontend/views/'));
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'main', layoutsDir: __dirname + '/../frontend/views/layouts/' }));
app.use(express.static(path.join(__dirname, '../../public')));
app.set('view engine', 'hbs');

app.use(express.urlencoded({
    extended: true
  }))

app.use(router);

export default app;