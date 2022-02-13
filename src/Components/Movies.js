import { Grid, Pagination, Container, CircularProgress, Button } from '@mui/material'
import MovieItem from './MovieItem'
import MovieDetail from './MovieDetail';
import { Fragment, useEffect, useState } from "react";
import env from "react-dotenv";


let paginationContainerStyles = {
    pt: 3, display: 'flex', justifyContent: 'center'
}


function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetailState, ToggleMovieDetail] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState()

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
        if (movies.length !== 0) {
            setIsLoading(false);
        }
    }, [movies]);

    const handlePageChange = (e, page) => {
        setPage(page)
        fetchData()
    };

    const movieDetailHandler = () => {
        ToggleMovieDetail(!movieDetailState);
    }

    return (
        <Fragment>
            <MovieDetail isOpen={movieDetailState} togglerHandler={movieDetailHandler} id={selectedMovie} />
            <Container sx={{ ...paginationContainerStyles }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </Container>
            <Grid container spacing={2} padding={5} sx={{ justifyContent: 'center' }}>
                {isLoading ? (<CircularProgress />) : (movies.map(m => <MovieItem
                    key={m.id}
                    id={m.id}
                    title={m.title}
                    voteAverage={m.voteAverage}
                    shortTitle={m.shortTitle}
                    backdropPath={m.backdropPath}
                    movieDetailHandler={movieDetailHandler}
                    selectMovieHandler={setSelectedMovie} />
                ))}
            </Grid >
            <Container sx={{ ...paginationContainerStyles }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </Container>
        </Fragment>
    )
}

export default Movies;
