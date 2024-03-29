import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button, Card, CardMedia, Paper, Rating } from '@mui/material';
import { cabinetService, paintingService, electricalService, plumbingService } from '../utils/constants';

const BrownButton = styled(Button)(() => ({
    '&:hover': {
        backgroundColor: '#C38F5F',
    },
}));

const HomePage = () => {

    return (
        <Box id="homepage" mb={0}>
            <Box
                className="hero-img"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ pt: "100px" }}
                >
                    <Typography
                        display={{ xs: "none", md: "block"}}
                        pb={3}
                        sx={{
                            fontSize: "3rem"
                        }}
                    >
                        <span className="wordmean ls1">Expert Contractor Services</span>
                    </Typography>
                    <Typography
                        className="wordmean ls1"
                        display={{ xs: "block", md: "none"}}
                        pb={3}
                        sx={{
                            textAlign: "center",
                            fontSize: "2.25rem"
                        }}
                    >
                        Expert Contractor<br />Services
                    </Typography>
                    <Typography
                        variant="h5"
                        pb={4}
                        sx={{
                            fontSize: {xs: "1.25rem", md: "1.75rem"}
                        }}
                    >
                        Serving Delaware & Chester County PA
                    </Typography>
                    <Typography
                        variant="h4"
                        mb={6}
                        sx={{
                            fontSize: {xs: "1.75rem", md: "2.25rem"}
                        }}
                    >
                        (610)-787-2935
                    </Typography>
                    <Box
                        display="flex"
                        gap={12}
                    >
                        <Link to="/services">
                            <BrownButton className="shadow-24" size="large" variant="contained" sx={{ backgroundColor: "#59372E" }}>
                                Services
                            </BrownButton>
                        </Link>
                        <Link to="/gallery">
                            <BrownButton className="shadow-24" size="large" variant="contained" sx={{ backgroundColor: "#59372E" }}>
                                Gallery
                            </BrownButton>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Stack
                py={10}
                sx={{ backgroundColor: "#3e3e41" }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    mb={{ xs: 10, md: 6 }}
                >
                    <Typography className="wordmean"
                        sx={{
                            fontSize: {xs: "3rem", md: "3.75rem"}
                        }}
                    >
                        Services
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    justifyContent="space-evenly"
                    alignItems={{ xs: "center", md: "inherit" }}
                    gap={{ xs: 12, md: 0 }}
                >
                    <Link to="/services#cabinetry">
                        <Stack alignItems="center">
                            <Box className="hover-lift">
                                <Card
                                    elevation={12}
                                    raised={true}
                                    sx={{
                                        maxWidth: { xs: "300px", md: "225px" },
                                        minWidth: { xs: "300px", md: "225px" },
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: {xs: 200, md: 150 }
                                        }}
                                        image={cabinetService}
                                        title="cabinet service"
                                    >

                                    </CardMedia>
                                </Card>
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "2rem",
                                    mt: 2
                                }}
                            >
                                Cabinetry & Trim
                            </Typography>
                        </Stack>
                    </Link>
                    <Link to="/services#electrical">
                        <Stack alignItems="center">
                            <Box className="hover-lift">
                                <Card
                                    elevation={12}
                                    raised={true}
                                    sx={{
                                        maxWidth: { xs: "300px", md: "225px" },
                                        minWidth: { xs: "300px", md: "225px" },
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: {xs: 200, md: 150 }
                                        }}
                                        image={electricalService}
                                        title="electrical service"
                                    >

                                    </CardMedia>
                                </Card>
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "2rem",
                                    mt: 2
                                }}
                            >
                                Electrical
                            </Typography>
                        </Stack>
                    </Link>
                    <Link to="/services#plumbing">
                        <Stack alignItems="center">
                            <Box className="hover-lift">
                                <Card
                                    elevation={12}
                                    raised={true}
                                    sx={{
                                        maxWidth: { xs: "300px", md: "225px" },
                                        minWidth: { xs: "300px", md: "225px" },
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: {xs: 200, md: 150 }
                                        }}
                                        image={plumbingService}
                                        title="plumbing service"
                                    >

                                    </CardMedia>
                                </Card>
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "2rem",
                                    mt: 2
                                }}
                            >
                                Plumbing
                            </Typography>
                        </Stack>
                    </Link>
                    <Link to="/services#painting">
                        <Stack alignItems="center">
                            <Box className="hover-lift">
                                <Card
                                    elevation={12}
                                    raised={true}
                                    sx={{
                                        maxWidth: { xs: "300px", md: "225px" },
                                        minWidth: { xs: "300px", md: "225px" },
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: {xs: 200, md: 150 }
                                        }}
                                        image={paintingService}
                                        title="painting service"
                                    >

                                    </CardMedia>
                                </Card>
                            </Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "2rem",
                                    mt: 2
                                }}
                            >
                                Painting
                            </Typography>
                        </Stack>
                    </Link>
                </Box>
            </Stack>
            <Stack
                py={8}
                sx={{ backgroundColor: "#525256" }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    mb={6}
                >
                    <Typography className="wordmean"
                        sx={{
                            fontSize: {xs: "3rem", md: "3.75rem"}
                        }}
                    >
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
                    <Paper elevation={8} sx={{ background: "#71717a" }}>
                        <Stack
                            width="300px"
                            height="260px"
                            gap={2}
                            sx={{
                                p: "20px"
                            }}
                            >
                            <Typography color="#fff" sx={{ fontSize: "1.25rem" }}>Chris&nbsp;-&nbsp;<span>Malvern, PA</span></Typography>
                            <Typography flexGrow={1} color="#fff">"If you are looking for neat, experienced, and quality workmanship, Vanhorn Contractors provides it at every level! Their work is exceptional and first class."</Typography>
                            <Rating defaultValue={5} precision={0.5} readOnly />
                        </Stack>
                    </Paper>
                    <Paper elevation={8} sx={{ background: "#71717a" }}>
                        <Stack
                            width="300px"
                            height="260px"
                            gap={2}
                            sx={{
                                p: "20px"
                            }}
                            >
                            <Typography color="#fff" sx={{ fontSize: "1.25rem" }}>Matt&nbsp;-&nbsp;<span>Glen Mills, PA</span></Typography>
                            <Typography flexGrow={1} color="#fff">"Most recently they installed 2 replacement interior doors. This was on short notice too. Good guys who care about their work and it shows!!"</Typography>
                            <Rating defaultValue={4} precision={0.5} readOnly />
                        </Stack>
                    </Paper>
                    <Paper elevation={8} sx={{ background: "#71717a" }}>
                        <Stack
                            width="300px"
                            height="260px"
                            justifyContent="space-between"
                            gap={2}
                            sx={{
                                p: "20px"
                            }}
                        >
                            <Typography color="#fff" sx={{ fontSize: "1.25rem" }}>Robert&nbsp;-&nbsp;<span>Concord, PA</span></Typography>
                            <Typography flexGrow={1} color="#fff">"They were amazing form start to finish. I would recommend VanHorn Contractors to anyone!"</Typography>
                            <Rating defaultValue={4.5} precision={0.5} readOnly />
                        </Stack>
                    </Paper>
                    <Paper elevation={8} sx={{ background: "#71717a" }}>
                        <Stack
                            width="300px"
                            height="260px"
                            gap={2}
                            sx={{
                                p: "20px"
                            }}
                        >
                            <Typography color="#fff" sx={{ fontSize: "1.25rem" }}>Simon&nbsp;-&nbsp;<span>Chichester, PA</span></Typography>
                            <Typography flexGrow={1} color="#fff">"I would recommend these guys to anyone looking to conduct home renovations. Our carpenter showed up on time ready to work and left the work site clean at the end of each day."</Typography>
                            <Rating defaultValue={5} precision={0.5} readOnly />
                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </Box>
    );
}

export default HomePage;