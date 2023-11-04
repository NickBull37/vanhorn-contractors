import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { carpentry } from '../utils/constants';

const Header = () => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    function toggleMenu() {
        setSideMenuOpen(!sideMenuOpen);
    }

    useEffect(() => {
        var menu = document.getElementById("sidemenu");
        if (sideMenuOpen) {
            menu.style.right = "0";
        }
        else {
            menu.style.right = "-200px";
        }
    }, [sideMenuOpen])

    return (
        <Box id="header">
            <nav>
                <a href="/">
                    <Box
                        display="flex" 
                        alignItems="center"
                    >
                        <img height="60px" src={carpentry} alt="" />
                        <Typography
                            sx={{
                                fontSize: { xs: '1.375rem', md: '1.875rem' },
                                fontWeight: '600',
                                // mt: '15px',
                                // py: '5px',
                                // px: '20px',
                            }}
                            >
                            VanHorn Contractors
                        </Typography>
                    </Box>
                </a>
                <ul id="sidemenu">
                    <li><a href="/services">Services</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                    <i className="fa-solid fa-xmark" onClick={() => toggleMenu()}></i>
                </ul>
                <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
            </nav>
        </Box>
    );
}

export default Header;