const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const movie = '/movie';
const image = 'https://image.tmdb.org/t/p/w500';

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `${movie}/${id}`,
        search: (querySearch: string,page:number): string => `/search/movie?query=${querySearch}&page=${page}`
    },
    genres: {
        base: genres,
        byGenreId: (genreId: number,page:number): string => `${movies}?with_genres=${genreId}&page=${page}`
    },
    image
};

export {
    baseURL,
    urls
}