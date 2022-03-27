import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {

    const [value, setValue] = useState('')

    console.log({ value });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <Box>
            <FormControl error={value ? false : true}>
                <FormLabel id='job-experience-group-label'>
                    Years of Experience
                </FormLabel>
            </FormControl>
            <RadioGroup
                value={value}
                onChange={handleChange}
                name='job-experience-group'
                aria-labelledby='job-experience-group-label'
                row

            >
                <FormControlLabel
                    control={<Radio size='small' color='secondary' />}
                    label='0-2'
                    value='0-2'
                />
                <FormControlLabel
                    control={<Radio />}
                    label='3-5'
                    value='3-5'
                />
                <FormControlLabel
                    control={<Radio color='success' />}
                    label='6-10'
                    value='6-10'
                />

            </RadioGroup>
            <FormHelperText error={value ? false : true}>Select your experience</FormHelperText>
        </Box>
    )
}

export default MuiRadioButton