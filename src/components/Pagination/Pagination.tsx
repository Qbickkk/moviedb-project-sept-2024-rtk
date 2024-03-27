import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {genreActions, movieActions} from "../../store";
import css from './Pagination.module.css'

const Pagination = () => {

    const dispatch = useAppDispatch();
    const {genreId,querySearch} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});
    const pageNum = query.get('page');

    useEffect(() => {
        if (genreId) {
            dispatch(genreActions.getByGenreId({genreId: +genreId, page: +pageNum}))
        } else if (querySearch){
            dispatch(movieActions.search({querySearch, page: +pageNum}))
        }else {
            dispatch(movieActions.getAll({page: +pageNum}))
        }
    }, [pageNum, genreId, querySearch, dispatch]);


    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev
        })
    };

    return (
        <div className={css.Pagination}>
            <button className={css.Button} disabled={+pageNum <= 1} onClick={prevHandler}>prev</button>
            <button className={css.Button} disabled={+pageNum >= 500} onClick={nextHandler}>next</button>
        </div>
    );
};

export {Pagination};