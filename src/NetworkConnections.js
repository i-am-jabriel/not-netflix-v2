export const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMoviesFromDatabase = (route, query = '') => {
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}${query}`)
        .then(res => res.json())
}