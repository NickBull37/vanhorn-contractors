import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography, Card, CardMedia } from '@mui/material';
import { cabinetService, paintingService, electricalService, plumbingService } from '../utils/constants';

const ServicesPage = () => {
    return (
        <Stack id="services-page">
            <section id="cabinetry">
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
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2rem", md: "2.75rem" }
                            }}
                        >
                            Cabinetry & Trim
                        </Typography>
                        <Card
                            elevation={12}
                            raised={true}
                            sx={{
                                maxWidth: { xs: "300px", md: "400px" },
                                minWidth: { xs: "300px", md: "400px" },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 250 }}
                                image={cabinetService}
                                title="cabinetry service"
                            >

                            </CardMedia>
                        </Card>
                    </Box>
                    <Stack gap={2}>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            With years of experience in the fields of designing and building custom cabinetry and millwork, we are able to build or match almost any style of cabinet or trim. Let us help design your dream kitchen.
                        </Typography>
                        <Stack
                            gap={1}
                            pt={2}
                            sx={{
                                borderTop: "2px solid #BA8C63"
                            }}
                        >
                            <Typography sx={{ fontSize: "1.375rem" }}>
                                Cabinetry & Trim Services
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.125rem",
                                    pl: 2
                                }}
                            >
                                <ul>
                                    <li>
                                        Building custom cabinetry
                                    </li>
                                    <li>
                                        Repairing cabinet doors and drawers
                                    </li>
                                    <li>
                                        Cabinet installation
                                    </li>
                                </ul>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </section>
            <section id="electrical">
                <Box
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    alignItems="center"
                    gap={{ xs: 6, md: 30 }}
                    py={8}
                    px={"10%"}
                    sx={{ backgroundColor: "#525256" }}
                >
                    <Stack gap={2}>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            We provide a variety of indoor & outdoor household electrical services from replacing a worn out light switch to installing new outlets and light fixtures.
                        </Typography>
                        <Stack
                            gap={1}
                            pt={2}
                            sx={{
                                borderTop: "2px solid #BA8C63"
                            }}
                        >
                            <Typography sx={{ fontSize: "1.375rem" }}>
                                Electrical Services
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.125rem",
                                    pl: 2
                                }}
                            >
                                <ul>
                                    <li>
                                        Installing light fixtures, outlets, switches, etc.
                                    </li>
                                    <li>
                                        Installing/replacing circuit breakers or fuses
                                    </li>
                                </ul>
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Typography
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2rem", md: "2.75rem" }
                            }}
                        >
                            Electrical <span className="wordmean-small ls2">(minor)</span>
                        </Typography>
                        <Card
                            elevation={12}
                            raised={true}
                            sx={{
                                maxWidth: { xs: "300px", md: "400px" },
                                minWidth: { xs: "300px", md: "400px" },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 250 }}
                                image={electricalService}
                                title="electrical service"
                            >

                            </CardMedia>
                        </Card>
                    </Box>
                </Box>
            </section>
            <section id="plumbing">
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
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2rem", md: "2.75rem" }
                            }}
                        >
                            Plumbing <span className="wordmean-small ls2">(minor)</span>
                        </Typography>
                        <Card
                            elevation={12}
                            raised={true}
                            sx={{
                                maxWidth: { xs: "300px", md: "400px" },
                                minWidth: { xs: "300px", md: "400px" },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 250 }}
                                image={plumbingService}
                                title="plumbing service"
                            >

                            </CardMedia>
                        </Card>
                    </Box>
                    <Stack gap={2}>
                        <Typography sx={{fontSize: "1.5rem" }}>
                            We provide a variety of plumbing services with a specialty in repair & replacement of existing fixtures or pipes. 
                        </Typography>
                        <Stack
                            gap={1}
                            pt={2}
                            sx={{
                                borderTop: "2px solid #BA8C63"
                            }}
                        >
                            <Typography sx={{ fontSize: "1.375rem" }}>
                                Plumbing Services
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.125rem",
                                    pl: 2
                                }}
                            >
                                <ul>
                                    <li>
                                        Changing or adding faucets
                                    </li>
                                    <li>
                                        Repairing leaks
                                    </li>
                                    <li>
                                        Replacing garbage disposals
                                    </li>
                                    <li>
                                        Installing new pipes
                                    </li>
                                </ul>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </section>
            <section id="painting">
                <Box
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    alignItems="center"
                    gap={{ xs: 6, md: 30 }}
                    py={8}
                    px={"10%"}
                    sx={{ backgroundColor: "#525256" }}
                >
                    <Stack gap={2}>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            We offer both interior and some exterior painting services. Interior services include hanging, repairing, and finishing drywall.
                        </Typography>
                        <Stack
                            gap={1}
                            pt={2}
                            sx={{
                                borderTop: "2px solid #BA8C63"
                            }}
                        >
                            <Typography sx={{ fontSize: "1.375rem" }}>
                                Painting Services
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.125rem",
                                    pl: 2
                                }}
                            >
                                <ul>
                                    <li>
                                        Hanging, repairing, & finishing drywall
                                    </li>
                                    <li>
                                        Interior & exterior painting
                                    </li>
                                    <li>
                                        Providing recommendations & assistance for selecting paint colors, wood stains, & finishes.
                                    </li>
                                </ul>
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Typography
                            className="wordmean ls2"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2rem", md: "2.75rem" }
                            }}
                        >
                            PAINTING
                        </Typography>
                        <Card
                            elevation={12}
                            raised={true}
                            sx={{
                                maxWidth: { xs: "300px", md: "400px" },
                                minWidth: { xs: "300px", md: "400px" },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 250 }}
                                image={paintingService}
                                title="painting service"
                            >

                            </CardMedia>
                        </Card>
                    </Box>
                </Box>
            </section>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={{ xs: 0, md: 24 }}
            >
                <section id="refer">
                    <Box
                        display="flex"
                        alignItems="center"
                        py={8}
                        pl={{ xs: "8%", md: "20%" }}
                        pr={{ xs: "8%", md: 0 }}
                    >
                        <Stack gap={1}>
                            <Typography
                                className="wordmean ls3"
                                sx={{ fontSize: "1.5rem" }}
                            >
                                Didn't find the service you need?
                            </Typography>
                            <Box
                                sx={{
                                    pt: 1,
                                    borderTop: "2px solid #BA8C63"
                                }}
                            >
                                <Typography sx={{ fontSize: "1.25rem" }}>
                                    Give us a call and we will be happy to discuss your project with you. If it's not 
                                    something we can provide, we can refer you to someone who can. Visit our contact 
                                    page <Link to="/contact">here</Link>.
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </section>
                <section id="any-size">
                    <Box
                        display="flex"
                        alignItems="center"
                        py={8}
                        pr={{ xs: "8%", md: "20%" }}
                        pl={{ xs: "8%", md: 0 }}
                    >
                        <Stack gap={1}>
                            <Typography
                                className="wordmean ls2"
                                sx={{ fontSize: "1.5rem" }}
                            >
                                Any job - Big or Small
                            </Typography>
                            <Box
                                sx={{
                                    pt: 1,
                                    borderTop: "2px solid #BA8C63"
                                }}
                            >
                                <Typography sx={{ fontSize: "1.25rem" }}>
                                    We take on jobs of any size. Our projects range from full kitchen remodels to simple light fixture or door knob replacements. 
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </section>
            </Box>
        </Stack>
    );
}

export default ServicesPage;