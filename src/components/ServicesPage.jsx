import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography, Card, CardMedia } from '@mui/material';
import { cabinetService, paintingService, furnitureService, electricalService } from '../utils/constants';

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
                            className="engine-spaced"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2.25rem", md: "2.875rem" }
                            }}
                        >
                            <span className="heading-cap">C</span>abinetry & <span className="heading-cap">T</span>rim
                        </Typography>
                        <Card
                            elevation={12}
                            raised={true}
                            sx={{
                                maxWidth: { xs: "300px", md: "390px" },
                                minWidth: { xs: "300px", md: "390px" },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 200 }}
                                image={cabinetService}
                                title="green iguana"
                            >

                            </CardMedia>
                        </Card>
                    </Box>
                    <Stack gap={2}>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            We specialize in custom cabinetry. We can match build or match almost any style of cabinetry or trim. Let us help design your dream kitchen.
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
                            We provide a variety of indoor & outdoor household electrical services. All services are GFI certified.
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
                                </ul>
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Typography
                            className="engine-spaced"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2.25rem", md: "2.875rem" }
                            }}
                        >
                            <span className="heading-cap">E</span>lectrical <span className="engine-spaced-small">(minor)</span>
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
                                sx={{ height: 200 }}
                                image={electricalService}
                                title="green iguana"
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
                            className="engine-spaced"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2.25rem", md: "2.875rem" }
                            }}
                        >
                            <span className="heading-cap">P</span>lumbing  <span className="engine-spaced-small">(minor)</span>
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
                                image={cabinetService}
                                title="green iguana"
                            >

                            </CardMedia>
                        </Card>
                    </Box>
                    <Stack gap={2}>
                        <Typography sx={{fontSize: "1.5rem" }}>
                            We provide a variety of plumbing services. All plumbing services are some filler text cause this needs to be a little bit longer.
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
                                </ul>
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Typography
                            className="engine-spaced"
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "2.25rem", md: "2.875rem" }
                            }}
                        >
                            <span className="heading-cap">P</span>ainting
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
            </section>
            <section id="refer">
                <Box
                    display="flex"
                    alignItems="center"
                    py={8}
                    px={"20%"}
                >
                    <Stack gap={1}>
                        <Typography
                            className="engine"
                            sx={{ fontSize: "1.625rem" }}
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
        </Stack>
    );
}

export default ServicesPage;