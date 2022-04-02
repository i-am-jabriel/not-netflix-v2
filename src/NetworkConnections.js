export const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMoviesFromDatabase = (route) => {
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
        .then(res => res.json())
}