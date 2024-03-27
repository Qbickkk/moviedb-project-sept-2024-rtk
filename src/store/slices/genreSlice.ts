import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenres, IMovie, IMovies} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[],
    moviesByGenre: IMovie[]
    page: number
}

const initialState: IState = {
    genres: [],
    moviesByGenre: null,
    page: 1
};

const getAll = createAsyncThunk<IGenres, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const errors = e as AxiosError
            return rejectWithValue(errors.response.data);
        }
    })

const getByGenreId = createAsyncThunk<IMovies, { genreId: number, page: number }>(
    'genreSlice/getByGenreId',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getByGenreId(genreId, page)
            return data
        } catch (e) {
            const errors = e as AxiosError
            return rejectWithValue(errors.response.data);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, {payload}) => {
                const {genres} = payload
                state.genres = genres
            })
            .addCase(getByGenreId.fulfilled, (state, {payload}) => {
                const {results, page} = payload
                state.moviesByGenre = results
                state.page = page
            })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll,
    getByGenreId
};

export {
    genreSlice,
    genreReducer,
    genreActions
}