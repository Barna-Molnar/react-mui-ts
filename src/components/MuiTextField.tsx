import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import { VisibilityOff } from '@mui/icons-material'

const MuiTextField = () => {

    const [value, setValue] = useState<string>('')

    return (
        <Stack spacing={4}>
            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField label='name' variant='outlined' />
                <TextField label='name' variant='filled' />
                <TextField label='name' variant='standard' />

            </Stack>
            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField label='Small secondary' color='secondary' variant='outlined' size='small' />


            </Stack>

            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField
                    label='Form Input'
                    required
                    color='secondary'
                    variant='outlined'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value ? true : false}
                    helperText={!value && 'This is field is required!!!'}

                />
                <TextField
                    label='Password'
                    type={'password'}
                    required color='secondary'
                    variant='outlined'
                    helperText='Do not share you password with anyone'
                />
                <TextField label='Read only' inputProps={{ readOnly: true }} />
            </Stack>

            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }} />
                <TextField label='weight' InputProps={{
                    endAdornment: <InputAdornment position='start'>kg</InputAdornment>,
                }} />
                <TextField label='Password' type={'password'} InputProps={{
                    endAdornment: <InputAdornment position='start'><VisibilityOff /></InputAdornment>,
                }} />

            </Stack>
        </Stack>
    )
}

export default MuiTextField