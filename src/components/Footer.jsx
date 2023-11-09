import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            id="footer"
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 4, md: 8 }}
            p={{ xs: 4, md: 6 }}
        >
            <Typography variant="body2">COPYRIGHT <span>©</span> 2023</Typography>
            <a href="/">
                <Typography variant="body2">VanHorn Contractors LLC.</Typography>
            </a>
            <a href="/#/services">
                <Typography variant="body2">Services</Typography>
            </a>
            <a href="/#/gallery">
                <Typography variant="body2">Gallery</Typography>
            </a>
            <a href="/#/contact">
                <Typography variant="body2">Contact</Typography>
            </a>
            <a href="/#/about">
                <Typography variant="body2">About</Typography>
            </a>
        </Box>
    );
}

export default Footer;