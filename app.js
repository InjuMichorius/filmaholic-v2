import { movieOverview } from './public/source/routes/movieOverview.js'
import { movieDetail } from './public/source/routes/movieDetail.js'
import { search } from './public/source/search.js'
import { fetchData } from './public/source/api.js'

import bodyParser from "body-parser"
import express from "express"
import compression from "compression"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const port = process.env.PORT || 3000

const urlencodedParser = bodyParser.urlencoded({
  extended: true
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Code that minifies files
// app.use(compression())

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', movieOverview)

app.get('/search', search)

app.get('/:id', movieDetail)

app.get('/offline', (req, res) => {
  res.render('offline')
})

app.post('/sortData', (req, res) => {
  console.log(req.body.sort)
  sortAllMovies(req.body.sort)

  async function sortAllMovies(sorting) {
    const json = await fetchData('popular');
    const movies = json.results

    const sortedMovies = await sortMovies(sorting, movies);

    function sortMovies(sorting, movies) {
      if (sorting == 'none') {
        return movies
      } else if (sorting == 'alphabetical') {
        return movies.sort((a, b) => {
          const nameA = a.title.toLowerCase()
          const nameB = b.title.toLowerCase()
          if (nameA < nameB) {
            return -1
          } if (nameA > nameB) {
            return 1
          }

        })
      } else if (sorting == 'vote-average') {
        return movies.sort((a, b) => {
          const nameA = a.vote_average
          const nameB = b.vote_average
          if (nameA < nameB) {
            return 1
          } if (nameA > nameB) {
            return -1
          }
        })
      } else if (sorting == 'release-date') {
        return movies.sort((a, b) => {
          const nameA = a.release_date
          const nameB = b.release_date
          if (nameA < nameB) {
            return 1
          } if (nameA > nameB) {
            return -1
          }
        })
      }
    }
    console.log(sortedMovies);
    res.render('overview', {movies: sortedMovies})
  }
})

//Server check
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})