import { Box, Divider, Stack } from '@mui/material'

const MuiLayout = () => {
    return (
        <Stack
            sx={{ border: '1px solid' }}
            direction='row'
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}
        >
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    height: '100px',
                    width: '100px',
                    padding: '16px',
                    '&:hover': {
                        backgroundColor: 'primary.light'
                    }
                }}
            >
                MuiLayout
            </Box>
            <Box display={'flex'} height='100px' width='100px' bgcolor={'secondary.light'} p={2} >

            </Box>
        </Stack>
    )
}

export default MuiLayout