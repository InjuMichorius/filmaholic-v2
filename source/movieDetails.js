import { fetchData } from './api.js'

const loader = document.getElementById('lds-spinner')

//Create a function to render a specific movie.
export async function movieDetails(id) {
    const json = await fetchData(id);
    const movie = json
    const movieContainer = document.getElementById('movie-template');
    movieContainer.innerHTML = '';
    const html = `
    <div class="movieDetails">
        <div class="container">
            <img class="ww" src="https://image.tmdb.org/t/p/w200//${movie.backdrop_path}" alt="Background image of ${movie.title}"">
            <div class="centered"><img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="Cover of ${movie.title}"></div>
        </div>

        <article>
        <h1>${movie.original_title}</h1>
        <div>
            <span>Release</span>
            <p>${movie.release_date}</p>
        </div>
        <div>
            <span>Rating</span>
            <p>${movie.vote_average}</p>
        </div>
        <div>
            <span>Rating</span>
            <p>${movie.vote_average}</p>
        </div>
        <div>
            <span>Total votes</span>
            <p>${movie.vote_count}</p>
        </div>
        <div>
            <span>Description</span>
            <p>${movie.overview}</p>
        </div>
        </article>
    </div>`

    // loader.classList.toggle('hide');
    const loader = document.getElementById('lds-spinner')
    loader.style.display = "none";

    movieContainer.insertAdjacentHTML("afterbegin", html)
}