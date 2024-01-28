import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { carpentry2 } from '../utils/constants';

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
                <Link to="/#">
                    <Box
                        display="flex" 
                        alignItems="center"
                    >
                        <img height="35px" src={carpentry2} alt="" />
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.75rem' },
                                letterSpacing: 0,
                                color: "#fff",
                                pl: 1
                            }}
                        >
                            <span className="wordmean ls1">VAN HORN CONTRACTORS</span>
                        </Typography>
                    </Box>
                </Link>
                <ul id="sidemenu">
                    <li>
                        <Link to="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/gallery">GALLERY</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <i className="fa-solid fa-xmark" onClick={() => toggleMenu()}></i>
                </ul>
                <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
            </nav>
        </Box>
    );
}

export default Header;