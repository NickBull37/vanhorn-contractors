import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { Header, Footer, ContactForm } from './components';
import { HomePage, AboutPage, ServicesPage, GalleryPage, ContactPage } from './components';


const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "#27272a" }}>
                <Header />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                {/* <ContactForm /> */}
                <Footer />
            </Box>
        </BrowserRouter>
    );
}

export default App;