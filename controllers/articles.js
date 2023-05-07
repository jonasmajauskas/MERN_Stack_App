const router = require('express').Router()
// const db = require('../models') //reference to the models folder

//GET 
router.get('/', (req, res) => {
    let articles = [{
        name: 'test'
}]
    res.render('articles/index', { articles })
})

router.post('/', (req, res) => {
    res.redirect('index')
})

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