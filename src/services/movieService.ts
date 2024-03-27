import {IResponse} from "../types";
import {IMovie, IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll:(page:number):IResponse<IMovies> => apiService.get(urls.movies.base, {params:{page}}),
    getById:(id:number):IResponse<IMovie> => apiService.get(urls.movies.byId(id)),
    search:(querySearch:string,page:number):IResponse<IMovies> => apiService.get(urls.movies.search(querySearch,page))
};

export {
    movieService
}