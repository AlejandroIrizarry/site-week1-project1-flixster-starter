// Gloabl Constants
//const apiKey = "MY_API_KEY"
const api_key = "38f7a598025f212bdcefc8cdd3bd9abf"
const moviesGrid = document.getElementById("movies-grid")
const searchBtn = document.getElementById("search-button")
const loadBtn = document.getElementById("load-more-movies-btn")
const closeBtn = document.getElementById("close-search-btn")
let searchIn = document.getElementById("search-input")
const API_BASE_URL = "https://api.themoviedb.org/3/"
// Page Elements

let page = 1

async function getCurrentMoviesData() {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key + "&language=en-US&page="+ page)
    const data = await response.json();
    data.results.forEach(movie => {
        addMovies(movie.title, movie.poster_path, movie.vote_average)
    })
}

function addMovies(title, path, score) {
    moviesGrid.innerHTML += `
    <div class="movie-card">
        <img class="movie-poster" alt="${title}" src="${"https://image.tmdb.org/t/p/w500"+path}" />
        <div class="movie-info">
            <span class="movie-title">${title}</span>
            <div class="movie-votes">
                <img class="star" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-1024.png" />
                <span class="score">${score}</span>
             </div>
        </div>
    </div>`
}

function loadmore(){
    page+=1;
    getCurrentMoviesData();
    closeBtn.style.display = "inline-block";
}

async function getSearchData() {
    page = 1
    let query = searchIn.value
    const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US&query="+ query);
    const data = await response.json();
    data.results.forEach(movie => {
        addMovies(movie.title, movie.poster_path, movie.vote_average, movie.id)
    
    closeBtn.style.display = "inline-block"
    loadBtn.style.display = "inline-block"

    })

}

function closeSearch() {
    moviesGrid.innerHTML = ``
    searchIn.value = ""
    page -= 1
    if(page <= 1) {
        page = 1
        closeBtn.style.display = "none"
        loadBtn.style.display = "inline-block"
    }
    getCurrentMoviesData()
}

/**
 * The function responsible for handling all form submission events.
 *
 * @param {SubmitEvent} event - The SubmitEvent triggered when submitting the form
 *
 */
function handleFormSubmit(event) {f=
    event.preventDefault()
    moviesGrid.innerHTML = ""
    loadBtn.style.display = "none";
    getSearchData()
}

window.onload = function () {
    // execute your functions here to make sure they run as soon as the page loads
    getCurrentMoviesData()
    closeBtn.style.display = "none"
    loadBtn.addEventListener("click", loadmore)
    searchBtn.addEventListener("click", handleFormSubmit)
    closeBtn.addEventListener("click", closeSearch)
}



