import { fetchData } from './api.js'
const loader = document.getElementById('lds-spinner')
const input = document.getElementById('find-movies');

input.addEventListener('keyup', search);

//Create function that searches through movies on keypress in the search input
export async function search(event) {
    const json = await fetchData('popular');
    const movies = json.results

    input.addEventListener('keyup', (event => {
        const searchString = event.target.value.toLowerCase();
        const filteredMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchString);
        })
        console.log(filteredMovies)
        const movieContainer = document.getElementById('movie-template');
        movieContainer.innerHTML = '';
        const html = filteredMovies.map(movie => {
            return `
        <article class="movie">
        <a href="#${movie.id}">
        <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="Cover of ${movie.title}">
        <p class="movie-title">${movie.title}</p>
        <p>${movie.release_date}</p>
        <p>${movie.vote_average}</p>
        </a>
        </article>`
        }).join('')

        // loader.classList.toggle('hide');
        const loader = document.getElementById('lds-spinner')
        loader.style.display = "none";

        movieContainer.insertAdjacentHTML("afterbegin", html)


    }));


};