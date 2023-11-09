import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                            }}
                        >
                            Van Horn&nbsp;Contractors
                        </Typography>
                    </Box>
                </a>
                <ul id="sidemenu">
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <i className="fa-solid fa-xmark" onClick={() => toggleMenu()}></i>
                </ul>
                <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
            </nav>
        </Box>
    );
}

export default Header;