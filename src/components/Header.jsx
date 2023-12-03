import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { carpentry, carpentry2 } from '../utils/constants';
import "../fonts/Cornerstone.ttf";
import "../fonts/Knucklehead.otf";

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
                        <img height="40px" src={carpentry2} alt="" />
                        <Typography
                            className="engine"
                            sx={{
                                fontSize: { xs: '1.375rem', md: '2rem' },
                                color: "#fff",
                                pl: 2
                            }}
                        >
                            <span className="title-cap">V</span>an <span className="title-cap">H</span>orn&nbsp;<span className="title-cap">C</span>ontractors
                        </Typography>
                    </Box>
                </Link>
                <ul id="sidemenu">
                    <li>
                        <Link to="/services"><span className="engine"><span className="nav-cap">S</span>ervices</span></Link>
                    </li>
                    <li>
                        <Link to="/gallery"><span className="engine"><span className="nav-cap">G</span>allery</span></Link>
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