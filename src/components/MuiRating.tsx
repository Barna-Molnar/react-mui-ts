import { Stack, Rating } from '@mui/material'
import React, { useState } from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

const MuiRating = () => {

    const [value, setValue] = useState<number | null>(0)

    console.log({ value })
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
    return (
        <Stack
            spacing={2}
        >
            <Rating
                precision={0.5}
                value={value}
                onChange={handleChange}
                icon={<Favorite fontSize='inherit' color={'error'} />}
                emptyIcon={<FavoriteBorder fontSize='inherit' color={'success'} />}
                color={'error'}
            // highlightSelectedOnly
            />
        </Stack>
    )
}

export default MuiRating