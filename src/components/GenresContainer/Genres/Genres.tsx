import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../store";
import css from './Genres.module.css'

const Genres = () => {

    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.Container}>
            <div className={css.GenresContainer}>
                {genres.map(genre=><button key={genre.id} onClick={()=>navigate(`/genre/${genre.id}`)}>{genre.name}</button>)}
            </div>
        </div>
    );
};

export {Genres};