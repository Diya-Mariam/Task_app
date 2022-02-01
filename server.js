require('./models/db')
const express = require('express')
const exphbs= require('express-handlebars')
const bodyParser = require('body-parser')

const taskController = require('./controllers/taskController')
const path= require('path')

var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, '/views/'))     // __dirname is TASK-APP
app.engine('hbs', exphbs.engine({extname:'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname + '/views/layouts'}))
app.set('view engine', 'hbs')


app.listen(7000, ()=> {
    console.log('express server started')
})

app.use('/task', taskController)