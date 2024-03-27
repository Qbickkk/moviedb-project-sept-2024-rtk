export interface IMovie {
    adult: boolean
    backdrop_path: string
    budget: number
    genres: []
    homepage: string
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: []
    production_countries: []
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: []
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IMovies {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}

export interface IMovieCompanies {
    id: number
    logo_path: string
    name: string
    origin_country: string
}
