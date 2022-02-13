import { Grid, Pagination, Container, LinearProgress } from '@mui/material'
import MovieItem from './MovieItem'
import { Fragment, useEffect, useState } from "react";
import env from "react-dotenv";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        fetch(`${env.BASE_MOVIES_API}?page=${page}`)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
                setTotalPages(json.totalPages)
            });
    };

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        console.log(isLoading)
        if (movies.length !== 0) {
            setIsLoading(false);
        }
    }, [movies]);

    const handlePageChange = (e, page) => {
        setPage(page)
        fetchData()
    };

    return (
        <Fragment>
            <Container sx={{ pt: 3, display: 'flex', justifyContent: 'center' }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </Container>
            <Grid container spacing={2} padding={5}>
                {isLoading ? (<LinearProgress />) : (movies.map(m => <MovieItem
                    key={m.id}
                    title={m.title}
                    voteAverage={m.voteAverage}
                    shortTitle={m.shortTitle}
                    backdropPath={m.backdropPath} />
                ))}
            </Grid >
            <Container sx={{ pt: 3, display: 'flex', justifyContent: 'center' }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </Container>
        </Fragment>
    )
}

export default Movies;
