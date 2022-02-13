import { Grid } from '@mui/material'
import MovieItem from './MovieItem'
import { useEffect, useState } from "react";
import env from "react-dotenv";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        fetch(`${env.BASE_MOVIES_API}?page=${page}`)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
                setTotalPages(json.totalPages)
            })
    }, [])

    return (
        <Grid container spacing={2} padding={5}>
            {movies.map(m => <MovieItem
                key={m.id}
                title={m.title}
                voteAverage={m.voteAverage}
                shortTitle={m.shortTitle}
                backdropPath={m.backdropPath} />
            )}
        </Grid >
    )
}

export default Movies;
