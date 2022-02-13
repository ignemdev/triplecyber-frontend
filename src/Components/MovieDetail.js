import {
    Box,
    Modal,
    Button,
    Typography
} from '@mui/material'

import { useEffect, useState } from "react";
import env from "react-dotenv";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function MovieDetail(props) {
    const [movie, setMovie] = useState([])
    const { togglerHandler } = props;
    const { isOpen } = props;
    const { id } = props;

    const fetchData = () => {
        fetch(`${env.BASE_MOVIES_API}${id}`)
            .then(res => res.json())
            .then(json => {
                setMovie([json])
            });
    };

    useEffect(() => {
        if (isOpen) {
            fetchData();
        }
    }, [id, isOpen])


    return (
        <Modal
            open={props.isOpen}
            onClose={() => togglerHandler(0)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {movie[0].title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>

        </Modal>
    );
}

export default MovieDetail;