import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {

    const [countries, setCountries] = useState<Array<string>>([])

    const fakeResultFromApi = [
        {
            value: 'IN',
            name: 'India'
        },
        {
            value: 'HU',
            name: 'Hungary'
        },
        {
            value: 'USA',
            name: 'America'
        },
        {
            value: 'AU',
            name: 'Australia'
        },
    ]
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        setCountries(typeof value === 'string' ? value.split('') : value)
    }

    return (
        <Box width={250}>
            <TextField
                label='Select Country'
                select
                value={countries}
                onChange={handleChange}
                fullWidth
                color='secondary'
                SelectProps={{
                    multiple: true,
                }}
                size='small'
                helperText={countries.length === 0 ? 'Please select your country' : ""}
                error={countries.length === 0 ? true : false}
            >
                {
                    fakeResultFromApi.map((country, index) => (
                        <MenuItem
                            key={index}
                            value={country.value}
                        >
                            {country.name}
                        </MenuItem>
                    ))
                }

            </TextField>
        </Box>
    )
}

export default MuiSelect