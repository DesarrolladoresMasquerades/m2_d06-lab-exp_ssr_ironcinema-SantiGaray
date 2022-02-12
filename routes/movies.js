const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

router
.get('/movie/:id', (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
    .then((movie)=>{
        res.render("detail.hbs",movie)
    })
    .catch((err)=> console.log("DB error reading '/movie/:id"))
})


router.get('/movies', (req, res, next) =>{
  Movie.find()
    .then((movies)=>{
        res.render("movies.hbs",{movies});
    })
    .catch((err)=> console.log("DB error reading '/movies"))
     
})

module.exports = router;