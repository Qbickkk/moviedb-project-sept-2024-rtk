import React from 'react';

import {Movies, Pagination} from "../../components";


const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <Pagination/>
        </div>
    );
};

export {MoviesPage};