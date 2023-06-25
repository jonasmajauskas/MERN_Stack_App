const { query } = require('express')
const axios = require('axios');
// const articles = require('../models/articles');
const router = require('express').Router()
// const articles = require('../models/articles.js')
// const db = require('../models') //reference to the models folder

router.get('/', (req, res) => {
    res.render('articles/search')
})

router.post('/', (req, res) => {
    const query = ("q=" + req.body.keyword + "&")
    const begin_date = ("begin_date=" + req.body.begin_date + "&")
    const end_date = ("end_date=" + req.body.end_date + "&")
    const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    const API_key = "api-key=emmqGHUHZxKM4maAxcN8HXNt0KlP2KgV"
    const sort = ("sort=newest&")
    const getArticles = async function Query() {
        try { 
            const { data } = await axios.get(API_URL + begin_date + end_date + query + sort + API_key);
            return data; // Return the response data
        } catch (err) {
            throw new Error(err); // Throw an error if the request fails
        }
    };
    getArticles()
        .then((articles) => {
            console.log(articles); // Log the response data
            res.render('articles/index', { articles }); // Pass the data to the view for rendering
        })
        .catch((err) => {
            res.json({ message: err });
        });
});






// router.post('/', (req, res) => {
//     const query = ("q=" + req.body.keyword + "&")
//     const begin_date = ("begin_date=" + req.body.begin_date + "&")
//     const end_date = ("end_date=" + req.body.end_date + "&")
//     const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
//     const API_key = "api-key=emmqGHUHZxKM4maAxcN8HXNt0KlP2KgV"
//     const sort = ("sort=newest&")
//     const getArticles = async function Query() {
//         const { data } = await axios.get(API_URL + begin_date + end_date + query + sort + API_key)
//         console.log(data)
//     }
//     getArticles().then(() => {
//         res.render('articles/index');
//     })
//     .catch(err => {
//         res.json({ message: err });
//     });
// }),


//Publishes the docs view
// router.post('/', (req, res) => {
//     const begin_date = ("begin_date=" + req.body.begin_date + "&")
//     const end_date = ("end_date=" + req.body.end_date + "&")
//     const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
//     const API_key = "api-key=emmqGHUHZxKM4maAxcN8HXNt0KlP2KgV"
//     const sort = ("sort=newest&")
//     const response = async function Query(data) {
//         const responseUnparsed = await fetch(API_URL + begin_date + end_date + sort + API_key)
//         const parsed = await responseUnparsed.json(data)
//         return parsed
//     }
//     response().then((data) => {
//         res.render('articles/index', { data });
//     })
//     .catch(err => {
//         res.json({ message: err });
//     });
// }),

//Publishes without the docs view
// router.post('/', (req, res) => {
//     const begin_date = ("begin_date=" + req.body.begin_date + "&")
//     const end_date = ("end_date=" + req.body.end_date + "&")
//     const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
//     const API_key = "api-key=emmqGHUHZxKM4maAxcN8HXNt0KlP2KgV"
//     const sort = ("sort=newest&")
//     const resData = function Query() {
//         return axios.get(API_URL + begin_date + end_date + sort + API_key)
//     }
//     resData().then(() => {
//         res.render('articles/index');
//     })
//     .catch(err => {
//         res.json({ message: err });
//     });
// }),


// router.post('/', async (req, res) => {
//     const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
//     const API_key = "api-key=emmqGHUHZxKM4maAxcN8HXNt0KlP2KgV"
//     const begin_date = ("begin_date=" + req.body.begin_date + "&")
//     const end_date = ("end_date=" + req.body.end_date + "&")
//     const sort = ("sort=newest&")
//     const response = await fetch(API_URL + begin_date + end_date + sort + API_key)
//     const resData = await response.json()
//     // res.render('articles/index')
//     res.send(resData)
// })

// router.get('/query', (req, res) => {
//     res.render('articles/index', resData)
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