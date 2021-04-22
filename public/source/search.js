import { fetchData } from './api.js'

export async function search(req, res) {

    const json = await fetchData('popular');
    const movies = json.results
  
    const searchString = req.query.q.toLowerCase();
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchString);
    })
    res.render('overview', {movies: filteredMovies})
}