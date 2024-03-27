import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre, IMovie, IMovieCompanies} from "../../../interfaces";
import {urls} from "../../../constants";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../store";
import css from './MovieDetails.module.css'
interface IProps {
    movie: IMovie
}

const MovieDetails: FC<IProps> = ({movie}) => {

    const {original_title,backdrop_path,adult,budget,original_language,release_date,runtime,status,overview,tagline,genres,production_companies} = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {page} = useAppSelector(state => state.genres);

    return (
        <div className={css.Container}>
            <h1>{original_title}</h1>
            <div>
                <div className={css.Details}>
                    <img src={urls.image+backdrop_path} alt={original_title}/>
                    <div className={css.Description}>
                        <h4>Adult:{adult?'18+':'4+'}</h4>
                        <h4>Budget: {budget?`${budget}$`:'without budget'}</h4>
                        <h4>Original language: {original_language}</h4>
                        <h4>Release date: {release_date}</h4>
                        <h4>Runtime: {runtime}m</h4>
                        <h4>Status: {status}</h4>
                        <h4> Description: {overview}
                            <div>Tagline: {tagline?`"${tagline}"`:'without tagline'}</div>
                        </h4>
                        <div>
                            {genres.map((genre:IGenre) =><button key={genre.id} className={css.Button} onClick={()=>{
                                dispatch(genreActions.getByGenreId({genreId: +genre.id, page}))
                                navigate(`/genre/${genre.id}`)
                            }}>{genre.name}</button>)}
                        </div>
                        <div className={css.Logo}>
                            {production_companies.map((company:IMovieCompanies)=>
                                <div key={company.id}>
                                    <img src={urls.image+company.logo_path} alt={company.name}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className={css.Button}  onClick={()=>window.history.back()}>Back</button>
        </div>
    );
};

export {MovieDetails};