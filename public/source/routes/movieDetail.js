import { fetchData } from '../api.js'

//create function to render all popular movies. These will be rendered based on sorting (none by default).
export async function movieDetail(req, res) {
    const json = await fetchData(req.params.id)
    const movie = json
    
    res.render('movieDetail', {movie: movie})
}