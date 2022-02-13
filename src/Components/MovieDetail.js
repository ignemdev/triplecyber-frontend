import {
    Card,
    Box,
    CardContent,
    CardMedia,
    Modal,
    CircularProgress,
    Typography,
    Chip,
    Container
} from '@mui/material'

import { useEffect, useState } from "react";
import env from "react-dotenv";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
};

function MovieDetail(props) {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { togglerHandler } = props;
    const { isOpen } = props;
    const { id } = props;

    const fetchData = () => {
        fetch(`${env.BASE_MOVIES_API}${id}`)
            .then(res => res.json())
            .then(json => {
                setMovie([json])
                console.log(json)
            });
    };

    useEffect(() => {
        if (isOpen) {
            fetchData();
        }
        if (movie[0] != null) {
            setIsLoading(false);
        }
    }, [id, isOpen, movie])


    return (
        <Modal
            open={props.isOpen}
            onClose={() => togglerHandler(0)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {isLoading ? (<CircularProgress />) : (<Box sx={boxStyle}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={`${env.BASE_IMAGE_API}${movie[0].posterPath}`}
                        alt="green iguana"
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            {movie[0].title}
                        </Typography>
                        <Container sx={{ pb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Chip label={`${movie[0].voteAverage}/10`} color='info' />
                        </Container>
                        <Typography variant="body2" color="text.primery" align='justify'>
                            {movie[0].overview}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>)}

        </Modal>
    );
}

export default MovieDetail;