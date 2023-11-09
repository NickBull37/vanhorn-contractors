import React from 'react';
import { Box, Stack, Typography, Grid, Paper } from '@mui/material';

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
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "3rem" }
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
                            <Typography p={2} color="#fff">VanHorn Contractors LLC is a family owned and operated business that provides carpentry, painting, and deck services to Delaware and Chester County, PA, and surrounding areas.</Typography>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "3rem" }
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
                                sx={{ mb: 1 }}
                            >
                                <Typography p={2} color="#fff">Monday - Friday</Typography><Typography p={2} color="#fff">8:00AM - 5:00PM</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                sx={{ mb: 1 }}
                            >
                                <Typography px={2} color="#fff">Saturday - Sunday</Typography><Typography px={2} color="#fff">Closed</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography p={2} color="#fff">Holidays</Typography><Typography p={2} color="#fff">Closed</Typography>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "3rem" }
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
                            <Typography p={2} color="#fff" sx={{ mb: 1 }}>- Custom Cabinets</Typography>
                            <Typography px={2} color="#fff" sx={{ mb: 1 }}>- Custom Furniture</Typography>
                            <Typography p={2} color="#fff" sx={{ mb: 1 }}>- Painting</Typography>
                            <Typography px={2} pb={2} color="#fff">- Electrical Work</Typography>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "2.125rem", md: "3rem" }
                            }}
                        >
                            Payment Options
                        </Typography>
                        <Paper
                            elevation={12}
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Typography px={2} pt={2} color="#fff" sx={{ mb: 1 }}>- Cash</Typography>
                            <Typography p={2} color="#fff">- Check</Typography>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutPage;