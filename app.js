import { movieOverview } from './public/source/routes/movieOverview.js'
import { movieDetail } from './public/source/routes/movieDetail.js'

import express from "express"
import compression from "compression"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path"

const app = express()
const port = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Code that minifies files
app.use(compression({
  level: 6,
  threshold: 0,
  filter: (req, res) => {
    if (req.header['x-no-compression']) {
      return false
    }
    return compression.filter(req, res)
  },
}))

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', movieOverview)

app.get('/:id', movieDetail)

app.get('/offline', (req, res) => {
  res.render('offline')
})


//Server check
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})