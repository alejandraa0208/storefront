import React from 'react';
import Box from '@mui/material/Typography';
import Typography from '@mui/material/Typography';

const Footer = () => (
    <Box component='footer' sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
        <Typography variant='body1' color='text.secondary' align='center'>
            @ 2023 Virtual Store
        </Typography>
    </Box>
);

export default Footer;