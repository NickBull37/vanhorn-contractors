import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const ContactPage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            py={12}
            px={{ xs: 4, md: 0 }}
        >
            <Stack
                p={6}
                gap={2}
                sx={{
                    backgroundColor: "#71717a",
                    borderRadius: "20px"
                }}
            >
                <Typography variant="h4">Chuck Van Horn</Typography>
                <Typography sx={{ fontSize: "1.25rem" }}>Email: vhcontractors@gmail.com</Typography>
                <Typography sx={{ fontSize: "1.25rem" }}>Phone: (555)-555-5555</Typography>
            </Stack>
        </Box>
    );
}

export default ContactPage;