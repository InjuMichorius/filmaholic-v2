//Work in progress
import { fetchData } from './api.js'

export async function filterMovies(movies) {
    const json = await fetchData(movies);
    const movies = json
    console.log(movies);  
}
console.log('hello world') 