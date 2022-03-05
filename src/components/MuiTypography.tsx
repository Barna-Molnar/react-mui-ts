import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>H1 heading</Typography>
            <Typography variant='h2'>H2 heading</Typography>
            <Typography variant='h3'>H3 heading</Typography>
            <Typography variant='h4' component={'h1'} gutterBottom>H4 heading</Typography>
            <Typography variant='h5'>H5 heading</Typography>
            <Typography variant='h6'>H6 heading</Typography>
            {/* // Subtitle   */}
            <Typography variant='subtitle1'>sub title1</Typography>
            <Typography variant='subtitle2'>sub title2</Typography>
            {/* // Body1  */}
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quam.</Typography>
            {/* // Body2  */}
            <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti dolorum recusandae dicta alias id. Illum eaque quidem necessitatibus sapiente quibusdam.</Typography>
        </div>
    )
}

export default MuiTypography