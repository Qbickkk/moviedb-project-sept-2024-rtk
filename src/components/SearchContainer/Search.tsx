import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";

const Search = () => {

    const {page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {register,handleSubmit,reset} = useForm<IMovie>();
    const navigate = useNavigate();

    const search:SubmitHandler<IMovie> = async(query) => {
        await dispatch(movieActions.search({querySearch:query.title, page}))
        navigate(`/search/${query.title}`);
        reset()
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type='text' placeholder={'search'} {...register('title')} />
            <button>find</button>
        </form>
    );
};

export {Search};