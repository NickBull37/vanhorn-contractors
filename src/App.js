import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header, Footer } from './components';
import { HomePage, AboutPage, ServicesPage, GalleryPage, ContactPage, ContactFormPage } from './components';


const App = () => {
    return (
        <Box sx={{ backgroundColor: "#27272a" }}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/contact-form" element={<ContactFormPage />} />
            </Routes>
            {/* <ContactForm /> */}
            <Footer />
        </Box>
    );
}

export default App;