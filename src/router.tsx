import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, GenresPage, MovieDetailsPage, MoviesPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movie/:id', element: <MovieDetailsPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            },
            {
                path: 'genre/:genreId', element: <GenrePage/>
            },
            {
                path: 'search/:querySearch',element:<MoviesPage/>
            }
        ]
    }
]);

export {
    router
}