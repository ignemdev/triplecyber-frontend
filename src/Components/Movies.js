import { Grid } from '@mui/material'
import MovieItem from './MovieItem'

function Movies() {
    return (
        <Grid container spacing={2} padding={5}>
            <MovieItem />
        </Grid >
    )
}

export default Movies;
