export const API_KEY = '465bc048ae9b7c45031771aae2b7ea0c';

export const fetchMoviesFromDatabase = (route) => {
    console.log(`ok api.themoviedb.org/3/${route}?api_key=${API_KEY}`);
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
        .then(res => res.json())
}