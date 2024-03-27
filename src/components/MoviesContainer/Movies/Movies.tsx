import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../store";
import {MoviePoster} from "../MoviePoster/MoviePoster";

const Movies = () => {

    const {results, page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {querySearch} = useParams();

    useEffect(() => {
        if (querySearch) {
            dispatch(movieActions.search({querySearch, page}))
        } else {
            dispatch(movieActions.getAll({page}))
        }
    }, [page, querySearch, dispatch]);


    return (
        <div>
            {results.map(movie => <MoviePoster movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};