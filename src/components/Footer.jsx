import React from 'react';
import { Link } from "react-router-dom";
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
            <Typography variant="body2">
                <Link to="/#">
                    Van Horn Contractors LLC.
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/services">
                    Services
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/gallery">
                    Gallery
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/contact">
                    Contact
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/about">
                    About
                </Link>
            </Typography>
        </Box>
    );
}

export default Footer;