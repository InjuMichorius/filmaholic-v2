const renderOverview = require('./public/source/routes/movieOverview.js')
const renderDetail = require('./public/source/routes/movieDetail.js')
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', renderOverview)

app.get('/:id', renderDetail)

app.get('/test', (req, res) => {
  res.render('test')
})


//Server check
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})