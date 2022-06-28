import { Profile } from "../models/profile.js"
import axios from 'axios'

function index(req, res) {
  axios.get(`https://api.themoviedb.org/3/keyword/180547/movies?api_key=${process.env.API_KEY}&language=en-US&include_adult=false`)
  .then(response => {
      res.render('movies/search', {
        title: 'Lists of MCU Movies',
        response
        // values: response.data.results
  })
    // search: req.body.search ? req.body.search : null
  })
}

export {
  index
}