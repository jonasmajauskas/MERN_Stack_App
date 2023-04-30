const express = require('express')
const app = express()
require('dotenv').config()
// const methodOverride = require('method-override')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))

app.use('/articles', require('./controllers/articles'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})

//Listen for connections
app.listen(process.env.PORT)

module.exports = app;