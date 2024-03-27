import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store";
import {MoviePoster, Pagination} from "../../components";


const GenrePage = () => {

    const {genreId} = useParams();
    const {moviesByGenre,page} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getByGenreId({genreId: +genreId,page}))
    }, [dispatch,genreId,page]);

    return (
        <div>
            {moviesByGenre && <div>{moviesByGenre.map(movie=><MoviePoster movie={movie} key={movie.id}/>)}</div>}
            <Pagination/>
        </div>
    );
};

export {GenrePage};