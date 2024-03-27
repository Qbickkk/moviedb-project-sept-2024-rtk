import {IResponse} from "../types";
import {IGenres,IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: (): IResponse<IGenres> => apiService.get(urls.genres.base),
    getByGenreId: (genreId: number, page:number): IResponse<IMovies> => apiService.get(urls.genres.byGenreId(genreId, page))
};

export {
    genreService
}