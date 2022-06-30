import {Movie} from '../models/movie.js'
import axios from 'axios'
import { addMovie } from "./profiles.js"

function index(req, res) {
  axios.get(`https://api.themoviedb.org/3/keyword/180547/movies?api_key=${process.env.API_KEY}&language=en-US&include_adult=false`)
  .then(response => {
      res.render('movies/index', {
        title: 'Lists of MCU Movies',
        // response
        values: response.data.results
  })
    // search: req.body.search ? req.body.search : null
  })
}

// function addWatchList(req, res) {
//     req.body.watchList = req.user.profile._id
//     Movie.findOne(req.params.id)
//     .then((movie)=> {
//         movie.watchList.push(req.user)
//     })
// }

function show(req, res) {
    axios.get(`https://api.themoviedb.org/3/keyword/180547/movies?api_key=${process.env.API_KEY}&language=en-US&include_adult=false`)
    .then(response => {
        Movie.findOne({ id: response.data.id })
    .then((movie)=> {
      res.render("movies/show", {
        title: "Movie Details",
        movie,
        values: response.data.results
        // const isSelf = profile._id.equals(req.user.profile._id)
        
        })
    })
})
    .catch((err) => {
        console.log(err)
        res.redirect('/')
    })
}

export {
  index,
  show
}