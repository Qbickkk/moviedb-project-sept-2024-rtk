import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovies} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    results: IMovie[],
    movie: IMovie,
    page: number,
    total_pages: number,
    total_results: number,
    trigger: boolean
}

const initialState: IState = {
    results: [],
    movie: null,
    page: 1,
    total_pages: null,
    total_results: null,
    trigger: null
};

const getAll = createAsyncThunk<IMovies, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const errors = e as AxiosError
            return rejectWithValue(errors.response.data);
        }
    }
)

const getById = createAsyncThunk<IMovie, { id: number }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const errors = e as AxiosError
            return rejectWithValue(errors.response.data);
        }
    }
)

const search = createAsyncThunk<IMovies, {querySearch: string, page:number}>(
    'movieSlice/search',
    async ({querySearch,page},{rejectWithValue})=>{
        try {
            const {data} = await movieService.search(querySearch,page);
            return data
        }catch (e) {
            const errors = e as AxiosError
            return rejectWithValue(errors.response.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, {payload}) => {
                const {results, page, total_results, total_pages} = payload
                state.results = results
                state.page = page
                state.total_results = total_results
                state.total_pages = total_pages
            })
            .addCase(getById.fulfilled, (state, {payload}) => {
                state.movie = payload
            })
            .addCase(search.fulfilled, (state, {payload})=>{
                const {results, page,total_results,total_pages} = payload
                state.results = results
                state.page = page
                state.total_results = total_results
                state.total_pages = total_pages
            })
            .addMatcher(isFulfilled(search),state => {
                state.trigger = !state.trigger
            })

});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    search
};

export {
    movieSlice,
    movieReducer,
    movieActions
}