import React from 'react';
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Paper } from '@mui/material';
import { paperPlaneIcon, phoneIcon, facebookIcon } from '../utils/constants';

const ContactPage = () => {
    return (

        <Stack
            py={{ xs: 4, md: 8 }}
            px={{ xs: 4, md: "25%" }}
            sx={{
                width: '100%',
                backgroundColor: "#3e3e41"
            }}
        >
            <Typography
                variant="h3"
                mb={1}
            >
                Contact
            </Typography>
            <Paper elevation={12} sx={{ backgroundColor: "#71717a" }}>
                <Stack
                    gap={1}
                    // p={3}
                >
                    <Box
                        display="flex"
                        sx={{
                            pt: 2,
                            pb: 2,
                            px: 3,
                            borderBottom: "2px solid #55352b"
                        }}
                    >
                        <Typography
                            variant="h5"
                            color="#fff"
                        >
                            Chuck Van Horn
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        pl={3}
                        pt={2}
                    >
                        <Box sx={{ color: "#C38F5F", mr: 2 }}>{paperPlaneIcon}</Box>
                        <Typography variant="h6" color="#fff">
                            vhcontractors@gmail.com
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        pl={3}
                        pb={2}
                    >
                        <Box sx={{ color: "#C38F5F", mr: 2 }}>{phoneIcon}</Box>
                        <Typography variant="h6" color="#fff">
                            (610)-787-2935
                        </Typography>
                    </Box>
                </Stack>
            </Paper>
                <Stack mb={4} >
                    <Typography
                        variant="h3"
                        mb={1}
                        mt={10}
                    >
                        Social Media
                    </Typography>
                    <Paper elevation={12} sx={{ backgroundColor: "#71717a" }}>
                        <Box
                            display="flex"
                            alignItems="center"
                            p={3}
                        >
                            <Box sx={{ color: "#C38F5F", mr: 2 }}>{facebookIcon}</Box>
                            <Box
                                className="social-links"
                                display="flex"
                            >
                                <Link className="social-links" to="https://www.facebook.com/vanhorn.contractors" target="_blank" rel="noopener noreferrer">
                                    <Typography
                                        variant="h5"
                                    >
                                        Van Horn Contractors
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Paper>
                </Stack>
        </Stack>
    );
}

export default ContactPage;