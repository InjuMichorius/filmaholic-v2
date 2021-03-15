import { search } from './search.js'
import { movieOverview } from './movieOverview.js';
import { movieDetails } from './movieDetails.js';
search();

const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(__dirname + '/public/'));

//Initializing ejs
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', (req, res) => {
    res.render('overview')
})

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})