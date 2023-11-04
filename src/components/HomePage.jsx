import React from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material';
import { cabinet, paint, furniture } from '../utils/constants';

const theme = createTheme({
    palette: {
        primary: {
            main: '#72463B',
          },
    },
});

const BrownButton = styled(Button)(() => ({
    '&:hover': {
        backgroundColor: '#C38F5F',
    },
}));

const HomePage = () => {

    

    return (
        <Box id="homepage" mb={8}>
            <Box
                className="hero-img"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ pt: "150px" }}
                >
                    <Typography
                        variant="h3"
                        pb={1}
                        sx={{
                            fontSize: {xs: "2rem", md: "3rem"}
                        }}
                    >
                        Expert Contractor Services
                    </Typography>
                    <Typography
                        variant="h5"
                        pb={4}
                        sx={{
                            fontSize: {xs: "1.25rem", md: "1.5rem"}
                        }}
                    >
                        Serving Delaware & Chester County PA
                    </Typography>
                    <Typography
                        variant="h4"
                        mb={6}
                        sx={{
                            fontSize: {xs: "1.75rem", md: "2.125rem"}
                        }}
                    >
                        (610)-787-2935
                    </Typography>
                    <Box
                        display="flex"
                        gap={12}
                    >
                        <BrownButton size="large" variant="contained" href="/services" sx={{ backgroundColor: "#59372E" }}>
                            Services
                        </BrownButton>
                        <BrownButton size="large" variant="contained" href="/gallery" sx={{ backgroundColor: "#59372E" }}>
                            Gallery
                        </BrownButton>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                mt={12}
                mb={4}
            >
                <Typography variant="h2">
                    Services
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-evenly"
                alignItems={{ xs: "center", md: "inherit" }}
            >
                <Stack alignItems="center">
                    <Box>
                        <img src={cabinet} height="150px" alt="" />
                    </Box>
                    <Typography sx={{ fontSize: "2rem" }}>Custom Cabinets</Typography>
                </Stack>
                <Stack alignItems="center">
                    <Box>
                        <img src={paint} height="150px" alt="" />
                    </Box>
                    <Typography sx={{ fontSize: "2rem" }}>Painting</Typography>
                </Stack>
                <Stack alignItems="center">
                    <Box>
                        <img src={furniture} height="150px" alt="" />
                    </Box>
                    <Typography sx={{ fontSize: "2rem" }}>Custom Furniture</Typography>
                </Stack>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                mt={16}
                mb={4}
            >
                <Typography variant="h2">
                    Testimonials
                </Typography>
            </Box>
            <Box
                className="testimonials"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="center"
                alignItems={{ xs: "center", md: "inherit" }}
                gap={6}
            >
                <Stack
                    width="300px"
                    gap={2}
                    sx={{
                        background: "#71717a",
                        borderRadius: "10px",
                        p: "20px"
                    }}
                >
                    <Typography sx={{ fontSize: "1.25rem" }}>Chris&nbsp;&nbsp;<span>Malvern, PA</span></Typography>
                    <Typography>"If you are looking for neat, experienced, and quality workmanship, Vanhorn Contractors provides it at every level! Their work is exceptional and first class."</Typography>
                </Stack>
                <Stack
                    width="300px"
                    gap={2}
                    sx={{
                        background: "#71717a",
                        borderRadius: "10px",
                        p: "20px"
                    }}
                >
                    <Typography sx={{ fontSize: "1.25rem" }}>Matt&nbsp;&nbsp;<span>Glen Mills, PA</span></Typography>
                    <Typography>"Most recently they installed 2 replacement interior doors. This was on short notice too. Good guys who care about their work and it shows!!"</Typography>
                </Stack>
                <Stack
                    width="300px"
                    gap={2}
                    sx={{
                        background: "#71717a",
                        borderRadius: "10px",
                        p: "20px"
                    }}
                >
                    <Typography sx={{ fontSize: "1.25rem" }}>Robert&nbsp;&nbsp;<span>Concord, PA</span></Typography>
                    <Typography>"They were amazing form start to finish. I would recommend VanHorn Contractors to anyone!"</Typography>
                </Stack>
                <Stack
                    width="300px"
                    gap={2}
                    sx={{
                        background: "#71717a",
                        borderRadius: "10px",
                        p: "20px"
                    }}
                >
                    <Typography sx={{ fontSize: "1.25rem" }}>Simon&nbsp;&nbsp;<span>Chichester, PA</span></Typography>
                    <Typography>"I would recommend these guys to anyone looking to conduct home renovations. Our carpenter showed up on time ready to work and left the work site clean at the end of each day."</Typography>
                </Stack>
            </Box>
        </Box>
    );
}

export default HomePage;