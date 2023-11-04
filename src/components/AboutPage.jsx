import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const AboutPage = () => {
    return (
        <Stack
            gap={8}
            px={"10%"}
            py={8}
        >
            <Box
                display="flex"
                justifyContent="space-between"
            >
                <Box width="40%">
                    <Typography variant="h3">About</Typography>
                    <Box
                        mt={1}
                        py={3}
                        px={4}
                        sx={{
                            backgroundColor: "#71717a",
                            borderRadius: "10px"
                        }}
                    >
                        <Typography>VanHorn Contractors LLC is a family owned and operated business that provides carpentry, painting, and deck services to Delaware and Chester County, PA, and surrounding areas.</Typography>
                    </Box>
                </Box>
                <Box width="40%">
                    <Typography variant="h3">Hours</Typography>
                    <Box
                        mt={1}
                        py={2}
                        px={4}
                        sx={{
                            backgroundColor: "#71717a",
                            borderRadius: "10px"
                        }}
                    >
                        <Box
                            py={1}
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Typography>Monday - Friday</Typography><Typography>8:00AM - 5:00PM</Typography>
                        </Box>
                        <Box
                            py={1}
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Typography>Saturday - Sunday</Typography><Typography>Closed</Typography>
                        </Box>
                        <Box
                            py={1}
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Typography>Holidays</Typography><Typography>Closed</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
            >
                <Box width="40%">
                    <Typography variant="h3">Services</Typography>
                    <Box
                        mt={1}
                        py={3}
                        px={4}
                        sx={{
                            backgroundColor: "#71717a",
                            borderRadius: "10px"
                        }}
                    >
                        <Typography>- Custom Cabinets</Typography>
                        <Typography>- Custom Furniture</Typography>
                        <Typography>- Painting</Typography>
                        <Typography>- Electrical Work</Typography>
                    </Box>
                </Box>
                <Box minWidth="40%">
                    <Typography variant="h3">Payment Options</Typography>
                    <Box
                        mt={1}
                        py={3}
                        px={4}
                        sx={{
                            backgroundColor: "#71717a",
                            borderRadius: "10px"
                        }}
                    >
                        <Typography>Cash</Typography>
                        <Typography>Check</Typography>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}

export default AboutPage;