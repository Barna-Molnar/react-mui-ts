import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FormatUnderlined, Send, FormatItalic, FormatBold } from '@mui/icons-material';
import { useState } from 'react';

const MuiButton = () => {
    // React.MouseEvent<HTMLElement, MouseEvent>
    const [formats, setFormats] = useState<string | null>(null)

    const handleChange = (_event: React.MouseEvent<HTMLElement, MouseEvent>, updatedFormats: string | null) => {
        console.log(updatedFormats)
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='http://www.google.com'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>

                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>

            </Stack>
            <Stack spacing={2} direction='row'>

                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='success'>Success</Button>

            </Stack>
            <Stack spacing={2} direction='row'>

                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='success'>Success</Button>

            </Stack>
            <Stack spacing={2} direction='row'>

                <Button variant='contained' startIcon={<Send />} color='primary' disableRipple onClick={() => alert('click')}>Send</Button>
                <Button variant='contained' endIcon={<Send />} color='secondary' disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <Send />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                {/* onClick should be declared on the individaul button  */}
                <ButtonGroup
                    variant='outlined'
                    orientation='vertical'
                    size='small'
                    aria-label='aligment button group'
                >
                    <Button color='primary'>Primary</Button>
                    <Button color='secondary'>Secondary</Button>
                    <Button color='error'>Error</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={'row'}>
                <ToggleButtonGroup
                    aria-label='text-formatting'
                    value={formats}
                    onChange={handleChange}
                    size='large'
                    color='warning'
                    orientation='vertical'
                    exclusive
                >
                    <ToggleButton value={'bold'} aria-label='bold'>
                        <FormatBold />
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic'>
                        <FormatItalic />
                    </ToggleButton>
                    <ToggleButton value={'underlined'} aria-label='underlined'>
                        <FormatUnderlined />
                    </ToggleButton>
                </ToggleButtonGroup>

            </Stack>

        </Stack>
    )
}

export default MuiButton