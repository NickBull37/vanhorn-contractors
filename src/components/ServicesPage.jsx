import React from 'react';
import { Box, Stack, Typography, Card, CardMedia } from '@mui/material';
import { cabinetService, paintingService, furnitureService, electricalService } from '../utils/constants';

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
            >
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontSize: { xs: "2.25rem", md: "3rem" }
                        }}
                    >
                        Custom Furniture
                    </Typography>
                    <Card
                        elevation={12}
                        raised={true}
                        sx={{
                            maxWidth: { xs: "300px", md: "380px" },
                            minWidth: { xs: "300px", md: "380px" },
                        }}
                    >
                        <CardMedia
                            sx={{ height: 200 }}
                            image={furnitureService}
                            title="green iguana"
                        >

                        </CardMedia>
                    </Card>
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
                sx={{ backgroundColor: "#525256" }}
            >
                <Typography sx={{ fontSize: "1.5rem" }}>Offering services including custom cabinets, bookshelves, entertainment centers, window bench seats, and more! In addition to creating custom screen and interior doors, we offer installation of Pella windows and doors.</Typography>
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontSize: { xs: "2.25rem", md: "3rem" }
                        }}
                    >
                        Electrical Work
                    </Typography>
                    <Card
                        elevation={12}
                        raised={true}
                        sx={{
                            maxWidth: { xs: "300px", md: "360px" },
                            minWidth: { xs: "300px", md: "360px" },
                        }}
                    >
                        <CardMedia
                            sx={{ height: 200 }}
                            image={electricalService}
                            title="green iguana"
                        >

                        </CardMedia>
                    </Card>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                gap={{ xs: 6, md: 30 }}
                py={8}
                px={"10%"}
            >
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontSize: { xs: "2.25rem", md: "3rem" }
                        }}
                    >
                        Cabinets
                    </Typography>
                    <Card elevation={12} raised={true} sx={{ maxWidth: "300px", minWidth: "300px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={cabinetService}
                            title="green iguana"
                        >

                        </CardMedia>
                    </Card>
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
                sx={{ backgroundColor: "#525256" }}
            >
                <Typography sx={{ fontSize: "1.5rem" }}>Offering services including custom cabinets, bookshelves, entertainment centers, window bench seats, and more! In addition to creating custom screen and interior doors, we offer installation of Pella windows and doors.</Typography>
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontSize: { xs: "2.25rem", md: "3rem" }
                        }}
                    >
                        Painting
                    </Typography>
                    <Card elevation={12} raised={true} sx={{ maxWidth: "300px", minWidth: "300px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={paintingService}
                            title="green iguana"
                        >

                        </CardMedia>
                    </Card>
                </Box>
            </Box>
        </Stack>
    );
}

export default ServicesPage;