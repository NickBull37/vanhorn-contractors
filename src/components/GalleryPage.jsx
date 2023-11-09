import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { placeHolder } from '../utils/constants';

const GalleryPage = () => {
    return (
        <Stack
            alignItems="center"
            gap={4}
            py={8}
            sx={{
                width: '100%',
                backgroundColor: "#3e3e41"
            }}
        >
            <Box>
                <img src={placeHolder} alt="" />
            </Box>
            <Box>
                <img src={placeHolder} alt="" />
            </Box>
            <Box>
                <img src={placeHolder} alt="" />
            </Box>
            <Box>
                <img src={placeHolder} alt="" />
            </Box>
            <Box>
                <img src={placeHolder} alt="" />
            </Box>
            <Box>
                <img src={placeHolder} alt="" />
            </Box>
        </Stack>
    );
}

export default GalleryPage;