import React from 'react';
import { Box, Stack, Typography, Grid, Paper } from '@mui/material';
import { moneyIcon, checkIcon } from '../utils/constants';

const AboutPage = () => {
    return (

        <Box
            py={{ xs: 4, md: 8 }}
            px={{ xs: 4, md: 24 }}
            sx={{
                width: '100%',
                backgroundColor: "#3e3e41"
            }}
        >
            <Grid container rowSpacing={8} columnSpacing={{ xs: 1, md: 24 }} mb={4}>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "2.5rem" }
                            }}
                        >
                            About
                        </Typography>
                        <Paper
                            elevation={12}
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                            }}
                        >
                            <Typography p={2} color="#fff">Van Horn Contractors LLC is a family owned and operated business that has been providing quality services to Delaware and South Chester counties and surrounding areas since 1975.</Typography>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "2.5rem" }
                            }}
                        >
                            Hours
                        </Typography>
                        <Paper
                            elevation={12}
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                // sx={{ mb: 0.5 }}
                            >
                                <Typography pt={2} px={2} pb={1} color="#fff">Monday - Friday</Typography>
                                <Typography pt={2} px={2} pb={1} color="#fff">8:00AM - 5:00PM</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography px={2} pb={1} color="#fff">Saturday - Sunday</Typography>
                                <Typography px={2} pb={1} color="#fff">Closed</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography px={2} pb={1} color="#fff">Holidays</Typography>
                                <Typography px={2} pb={1} color="#fff">Closed</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography px={2} pb={2} color="#fff">Emergencies</Typography>
                                <Typography px={2} pb={2} color="#fff">Anytime (day or night)</Typography>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "2.5rem" }
                            }}
                        >
                            Services
                        </Typography>
                        <Paper
                            elevation={12}
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Typography px={2} pt={2} pb={1} color="#fff" sx={{ mb: 0.5 }}>- Custom Cabinetry (crafting & repair)</Typography>
                            <Typography px={2} pb={1} color="#fff" sx={{ mb: 0.5 }}>- Kitchen Planning & Design</Typography>
                            <Typography px={2} pb={1} color="#fff" sx={{ mb: 0.5 }}>- Painting (interior & exterior)</Typography>
                            <Typography px={2} pb={1} color="#fff" sx={{ mb: 0.5 }}>- Drywall Services (hanging, finishing, & repairing)</Typography>
                            <Typography px={2} pb={1} color="#fff">- Minor Household Electrical Work</Typography>
                            <Typography px={2} pb={2} color="#fff">- Minor Household Plumbing Work</Typography>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            className="wordmean"
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "2.5rem" }
                            }}
                        >
                            PAYMENT OPTIONS
                        </Typography>
                        <Paper
                            elevation={12}
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Box
                                pt={2}
                                px={2}
                                mb={2}
                                display="flex"
                                alignItems="center"
                            >
                                <Box sx={{ color: "#31aa49", mr: 2 }}>{moneyIcon}</Box>
                                <Typography
                                    color="#fff"
                                    sx={{
                                        fontSize: "1.125rem"
                                    }}
                                >
                                    Cash
                                </Typography>
                            </Box>
                            <Box
                                pb={2}
                                px={2}
                                display="flex"
                                alignItems="center"
                            >
                                <Box sx={{ color: "#e4e0cd", mr: 2 }}>{checkIcon}</Box>
                                <Typography
                                    color="#fff"
                                    sx={{
                                        fontSize: "1.125rem"
                                    }}
                                >
                                    Check
                                </Typography>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutPage;