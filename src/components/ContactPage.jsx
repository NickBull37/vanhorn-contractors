import React from 'react';
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from '@mui/material';
import { paperPlaneIcon, phoneIcon, facebookIcon } from '../utils/constants';

const ContactPage = () => {
    return (

        <Stack
            py={{ xs: 4, md: 8 }}
            px={{ xs: 4, md: 32 }}
            sx={{
                width: '100%'
            }}
        >
            <Typography
                variant="h3"
            >
                Contact
            </Typography>
            <Stack
                mt={2}
                gap={1}
                p={3}
                sx={{
                    backgroundColor: "#62626a",
                    borderRadius: "10px"
                }}
            >
                <Box
                    display="flex"
                    sx={{
                        borderBottom: "3px solid #55352b"
                    }}
                >
                    <Typography
                        variant="h5"
                    >
                        Chuck Van Horn
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box sx={{ color: "#C38F5F", mr: 1 }}>{paperPlaneIcon}</Box>
                    <Typography variant="h6">
                        vhcontractors@gmail.com
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box sx={{ color: "#C38F5F", mr: 1 }}>{phoneIcon}</Box>
                    <Typography variant="h6">
                        (610)-787-2935
                    </Typography>
                </Box>
            </Stack>
            <Typography
                variant="h3"
                sx={{
                    mt: 10
                }}
            >
                Social Media
            </Typography>
            <Box
                display="flex"
                alignItems="center"
                mt={2}
                mb={{ xs: 4, md: 0 }}
                p={3}
                sx={{
                    backgroundColor: "#62626a",
                    borderRadius: "10px"
                }}
            >
                <Box sx={{ color: "#C38F5F", mr: 1 }}>{facebookIcon}</Box>
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
        </Stack>
    );
}

export default ContactPage;