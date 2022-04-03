import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import { useState } from 'react';

const MuiCard = () => {

    const [shadow, setShadow] = useState(4)

    return (
        <Box
            width={'300px'}
        >
            <Card
                elevation={shadow}
                onMouseOver={() => setShadow(10)}
                onMouseLeave={() => setShadow(4)}

            >
                <CardMedia
                    component={'img'}
                    height='140px'
                    image='https://source.unsplash.com/random'
                    alt='unsplash random image'
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component={'div'}
                    >
                        React
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur, aspernatur amet magni aliquid facilis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='secondary'>Share</Button>
                    <Button size='small'>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard