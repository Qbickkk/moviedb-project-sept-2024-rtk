import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import {MovieDetails} from "../../components";

const MovieDetailsPage = () => {

    const {movie} = useAppSelector(state => state.movies);
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id: +id}))
    }, [id,dispatch]);


    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export {MovieDetailsPage};


