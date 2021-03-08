import { fetchData } from './api.js'
const loader = document.getElementById('lds-spinner')

//sorting options
const alphabetical = document.querySelector('.alphabetical');
alphabetical.addEventListener('click', () => {
    movieOverview('Alpha')
});

const voteAverage = document.querySelector('.vote-average');
voteAverage.addEventListener('click', () => {
    movieOverview('vote')
});

const releaseDate = document.querySelector('.release-date');
releaseDate.addEventListener('click', () => {
    movieOverview('date')
});

//create function to render all popular movies. These will be rendered based on sorting (none by default).
export async function movieOverview(sorting) {
    const json = await fetchData('popular');
    const movies = json.results

    const sortedMovies = sortMovies(sorting, movies);

    function sortMovies(sorting, movies) {
        if (sorting == 'none') {
            return movies
        } else if (sorting == 'Alpha') {
            return movies.sort((a, b) => {
                const nameA = a.title.toLowerCase()
                const nameB = b.title.toLowerCase()
                if (nameA < nameB) {
                    return -1
                } if (nameA > nameB) {
                    return 1
                }

            })
        } else if (sorting == 'vote') {
            return movies.sort((a, b) => {
                const nameA = a.vote_average
                const nameB = b.vote_average
                if (nameA < nameB) {
                    return 1
                } if (nameA > nameB) {
                    return -1
                }
            })
        } else if (sorting == 'date') {
            return movies.sort((a, b) => {
                const nameA = a.release_date
                const nameB = b.release_date
                if (nameA < nameB) {
                    return 1
                } if (nameA > nameB) {
                    return -1
                }
            })
        }
    }
    console.log(sortedMovies)
    const movieContainer = document.getElementById('movie-template');
    movieContainer.innerHTML = '';
    const html = sortedMovies.map(movie => {
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
}