import { fetchData } from '../api.js'

//create function to render all popular movies. These will be rendered based on sorting (none by default).
export async function movieOverview(req, res) {
    const json = await fetchData('popular')
    const movies = json.results
    
    res.render('overview', {movies: movies})
}