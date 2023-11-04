import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { cabinet, paint, furniture } from '../utils/constants';
import FormatPaintRoundedIcon from '@mui/icons-material/FormatPaintRounded';

const ServicesPage = () => {
    return (
        <Stack id="services-page">
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                gap={{ xs: 6, md: 30 }}
                py={8}
                px={"10%"}
                sx={{ backgroundColor: "#52525b" }}
            >
                <Box>
                    <Typography variant="h2">Cabinets</Typography>
                    <img src={cabinet} alt="" />
                </Box>
                <Typography sx={{ fontSize: "1.5rem" }}>Offering services including custom cabinets, bookshelves, entertainment centers, window bench seats, and more! In addition to creating custom screen and interior doors, we offer installation of Pella windows and doors.</Typography>
            </Box>
            <Box
                display="flex"
                flexDirection={{ xs: "column-reverse", md: "row" }}
                alignItems="center"
                gap={{ xs: 6, md: 30 }}
                py={8}
                px={"10%"}
            >
                <Typography sx={{ fontSize: "1.5rem" }}>Offering services including custom cabinets, bookshelves, entertainment centers, window bench seats, and more! In addition to creating custom screen and interior doors, we offer installation of Pella windows and doors.</Typography>
                <Box>
                    <img src={paint} alt="" />
                    <Typography variant="h2">Painting</Typography>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                gap={{ xs: 6, md: 30 }}
                py={8}
                px={"10%"}
                sx={{ backgroundColor: "#52525b" }}
            >
                <Box>
                    <Typography variant="h2">Furniture</Typography>
                    <img src={furniture} alt="" />
                </Box>
                <Typography sx={{ fontSize: "1.5rem" }}>Offering services including custom cabinets, bookshelves, entertainment centers, window bench seats, and more! In addition to creating custom screen and interior doors, we offer installation of Pella windows and doors.</Typography>
            </Box>
        </Stack>
    );
}

export default ServicesPage;