import {
    ListItem,
    Grid,
    Button,
    Chip,
    Typography,
    CardMedia
} from '@mui/material'



function MovieItem() {

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
                image="https://via.placeholder.com/140.jpg"
                alt="green iguana"
            />
            <Button sx={{ ...buttonStyles }}>
                <ListItem sx={{ ...listItemStyles }}>
                    <Chip clickable label="short name" sx={{ ...chipMargins }} />
                    <Chip label="votos" color='info' sx={{ ...chipMargins }} />
                </ListItem>
                <ListItem>
                    <Typography variant="h6" color="inherit" component="div" sx={{ ...typographyStyles }}>
                        title
                    </Typography>
                </ListItem>
            </Button>
        </Grid>
    )
}

export default MovieItem;