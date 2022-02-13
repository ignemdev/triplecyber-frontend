import {
    ListItem,
    Grid,
    Button,
    Chip,
    Typography,
    CardMedia
} from '@mui/material'

import env from "react-dotenv";



function MovieItem(props) {

    const chipMargins = { mx: 1, my: 1 };

    const buttonStyles = {
        boxShadow: 3,
        borderRadiusTop: 0,
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap'
    }

    const listItemStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }

    const typographyStyles = {
        wordBreak: 'break-word',
        display: 'flex',
        mx: 1,
        mb: 1
    }

    return (
        <Grid item xs={12} sm={6} md={3}>
            <CardMedia
                component="img"
                height="140"
                image={`${env.BASE_IMAGE_API}${props.backdropPath}`}
                alt={props.title}
            />
            <Button sx={{ ...buttonStyles }}>
                <ListItem sx={{ ...listItemStyles }}>
                    <Chip clickable label={props.shortTitle} sx={{ ...chipMargins }} />
                    <Chip label={`${props.voteAverage}/10`} color='info' sx={{ ...chipMargins }} />
                </ListItem>
                <ListItem>
                    <Typography variant="h6" color="inherit" component="div" sx={{ ...typographyStyles }}>
                        {props.title}
                    </Typography>
                </ListItem>
            </Button>
        </Grid>
    )
}

export default MovieItem;