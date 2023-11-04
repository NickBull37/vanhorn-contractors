import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Fade, LinearProgress, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff00ff',
          },
    },
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loadingBar, setLoadingBar] = useState(false);

    const handleSubmit = async (e) => {

        setLoadingBar(true);
        e.preventDefault();

        

        try {
            
            // Email.send({
            //     Host : "smtp.gmail.com",
            //     Username : "nbulisky@gmail.com",
            //     Password : "Greenarrow37!",
            //     To : 'nbulisky@gmail.com',
            //     From : document.getElementById("email").value,
            //     Subject : "New Contracting Contact",
            //     Body : "Name: " + document.getElementById("name").value
            //         + "<br> Email: " + document.getElementById("email").value
            //         + "<br> Phone Number: " + document.getElementById("phone-number").value
            //         + "<br> Message: " + document.getElementById("message").value
            // }).then(
            //     message => alert(message)
            // );

            // if (response.ok) {
            //     setTimeout(() => {
            //         setLoadingBar(false);
            //         setSnackbarOpen(true);
            //         form.reset();
            //     }, 1000);
            // } else {
            //     console.error('Error!', response.status);
            // }

        } catch (error) {
            console.error('Error!', error.message);
        }
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarOpen(false);
    };

    return (
        <form onSubmit={handleSubmit} name="submit-email">
            <Box
                id="contact-form"
                display="flex"
                flexDirection="column"
            >
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
                >
                    <Button
                        variant='contained'
                        size='large'
                        type='submit'
                        sx={{
                            background: '#ff00ff',
                            mt: {xs: '30px', md: '20px' },
                            mb: '50px'
                        }}
                    >
                        Submit
                    </Button>
                    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Message sent successfully.
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </form>
    );
}

export default ContactForm;