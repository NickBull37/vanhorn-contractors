import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Fade, LinearProgress, Button, Snackbar, Paper } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const BrownButton = styled(Button)(() => ({
    '&:hover': {
        backgroundColor: '#C38F5F',
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#C38F5F',
          },
    },
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactFormPage = () => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loadingBar, setLoadingBar] = useState(false);

    const form = document.getElementById("form");
    const result = document.getElementById("result");

    const handleSubmit = async (e) => {

        setLoadingBar(true);

        console.log("ENTERED SUBMIT FUNCTION");

        const formData = new FormData(form);
        e.preventDefault();
        var object = {};

        formData.forEach((value, key) => {
            object[key] = value;
        });

        var json = JSON.stringify(object);
      
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
        .then(async (response) => {

            console.log("FORM SUBMITTED");

            let json = await response.json();

            if (response.status == 200) {
                setLoadingBar(false);
                setSnackbarOpen(true);
            }
            else {
                console.log(response);
            }

        })
        .catch((error) => {
            console.log("ERROR OCCURED", error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
        });
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarOpen(false);
    };

    return (
        <Stack
            px={{ xs: 4, md: "15%" }}
            sx={{
                width: '100%',
                backgroundColor: "#3e3e41"
            }}
        >
            <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" id="form">
                <Box
                    id="contact-form"
                    display="flex"
                    flexDirection="column"
                >
                    <Typography
                        className="wordmean ls2"
                        variant="h3"
                        mb={1}
                    >
                        Contact Me
                    </Typography>
                    <Paper elevation={12} sx={{ backgroundColor: "#71717a", p: 3 }}>
                        <input type="hidden" name="access_key" value="8fe5e9e1-f5f4-4e92-a2da-cfc1906d09b5" />
                        <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                        <input id="name" type="text" name="Name" placeholder="Your Name" required />
                        <input id="phone-number" type="phone" name="PhoneNumber" placeholder="Your Phone Number" required />
                        <input id="email" type="email" name="Email" placeholder="Your Email" required />
                        <textarea id="message" name="Message" rows="6" placeholder="Your Message" />
                        <ThemeProvider theme={theme}>
                            <Fade
                                in={loadingBar}
                                unmountOnExit
                            >
                                <LinearProgress />
                            </Fade>
                        </ThemeProvider>
                        <Box
                            display={{ xs: 'flex', md: 'block' }}
                            justifyContent={'center'}
                            textAlign="center"
                        >
                            <BrownButton
                                type="submit"
                                variant='contained'
                                size='large'
                                sx={{
                                    backgroundColor: "#59372E",
                                    mt: {xs: '30px', md: '20px' }
                                }}
                            >
                                Submit
                            </BrownButton>
                            <p id="result"></p>
                            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Message sent successfully.
                                </Alert>
                            </Snackbar>
                        </Box>
                    </Paper>
                </Box>
            </form>
        </Stack>
    );
}

export default ContactFormPage;