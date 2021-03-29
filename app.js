const renderOverview = require('./public/source/routes/movieOverview.js')
const renderDetail = require('./public/source/routes/movieDetail.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const compression = require('compression')

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
app.get('/', renderOverview)

app.get('/:id', renderDetail)

app.get('/offline', (req, res) => {
  res.render('offline')
})


//Server check
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})