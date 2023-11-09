import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';

const AboutPage = () => {
    return (

        <Box
            py={{ xs: 4, md: 8 }}
            px={{ xs: 4, md: 24 }}
            sx={{
                width: '100%'
            }}
        >
            <Grid container rowSpacing={8} columnSpacing={{ xs: 1, md: 24 }}>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography variant="h3" sx={{ mb: 1 }}>About</Typography>
                        <Box
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Typography>VanHorn Contractors LLC is a family owned and operated business that provides carpentry, painting, and deck services to Delaware and Chester County, PA, and surrounding areas.</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography variant="h3" sx={{ mb: 1 }}>Hours</Typography>
                        <Box
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                sx={{ mb: 1 }}
                            >
                                <Typography>Monday - Friday</Typography><Typography>8:00AM - 5:00PM</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                sx={{ mb: 1 }}
                            >
                                <Typography>Saturday - Sunday</Typography><Typography>Closed</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography>Holidays</Typography><Typography>Closed</Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography variant="h3" sx={{ mb: 1 }}>Services</Typography>
                        <Box
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Typography sx={{ mb: 1 }}>- Custom Cabinets</Typography>
                            <Typography sx={{ mb: 1 }}>- Custom Furniture</Typography>
                            <Typography sx={{ mb: 1 }}>- Painting</Typography>
                            <Typography>- Electrical Work</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <Typography variant="h3" sx={{ mb: 1 }}>Payment Options</Typography>
                        <Box
                            p={2}
                            sx={{
                                backgroundColor: "#71717a",
                                borderRadius: "10px"
                            }}
                        >
                            <Typography sx={{ mb: 1 }}>- Cash</Typography>
                            <Typography>- Check</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutPage;