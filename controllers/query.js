const router = require('express').Router()
const articles = require('../models/articles.js')
const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
// const db = require('../models') //reference to the models folder

//GET 

// router.get('/', (req, res) => {
//     res.render('favorites')
// })

router.get('/', (req, res) => {
    res.render('articles/search')
})

router.post('/', async (req, res) => {
    articles.push(req.body)
    const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    const API_key = "&api-key=emmqGHUHZxKM4maAxcN8HXNt0KlP2KgV"
    const pub_date = req.body.pub_date
    const response = await fetch(API_URL + pub_date + API_key)
    const resData = await response.json()
    res.send(resData)
})
  

// router.get('/query', (req, res) => {
//     res.render('articles/index', { articles })
// })

// router.post('/', (req, res) => {
//     res.redirect('index')
// })

// router.get('/search', (req, res) => {
//     res.send('articles/search')
// })


// router.get('/', (req, res) => {
//     db.Place.find()
//       .then((places) => {
//       res.render('places/index', { places })
//     })
//     .catch(err => {
//       console.log(err) 
//       res.render('error404')
//     })
// })

module.exports = router;