import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box, Stack, Typography } from '@mui/material';
import { cabinet1, cabinet2, cabinet3, cabinet4 } from '../utils/constants';
import { bar1, bar2, bar3, bar4, bar5 } from '../utils/constants';
import { house1, house2, house3, houseBefore1, houseBefore2 } from '../utils/constants';
import { sunroom1, sunroom2, sunroom3, sunroom4 } from '../utils/constants';
import { basementEntrace1, basementEntrace2 } from '../utils/constants';
import { storage1, storage2 } from '../utils/constants';
import { railing1, railing2 } from '../utils/constants';

const GalleryPage = () => {

    return (
        <Stack
            alignItems="center"
            gap={12}
            py={8}
            sx={{
                width: '100%',
                backgroundColor: "#3e3e41"
            }}
        >
            <Stack>
                <Typography
                    className="wordmean ls2"
                    variant="h3"
                    mb={1}
                    px={2}
                    sx={{
                        fontSize: {xs: "2rem", md: "3rem"}
                    }}
                >
                    Custom Cabinets
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    pb={4}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={cabinet1} alt="" />
                    <img className="gallery-image shadow-8" src={cabinet2} alt="" />
                    <img className="gallery-image shadow-8" src={cabinet3} alt="" />
                    <img className="gallery-image shadow-8" src={cabinet4} alt="" />
                </Box>
            </Stack>

            <Stack>
                <Typography
                    className="wordmean ls2"
                    variant="h3"
                    mb={1}
                    px={2}
                    sx={{
                        fontSize: {xs: "2rem", md: "3rem"}
                    }}
                >
                    Custom Bar
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    pb={4}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={bar1} alt="" />
                    <img className="gallery-image shadow-8" src={bar2} alt="" />
                    <img className="gallery-image shadow-8" src={bar3} alt="" />
                    <img className="gallery-image shadow-8" src={bar4} alt="" />
                    <img className="gallery-image shadow-8" src={bar5} alt="" />
                </Box>
            </Stack>

            <Stack>
                <Typography
                    className="wordmean ls2"
                    variant="h3"
                    mb={1}
                    px={2}
                    sx={{
                        fontSize: {xs: "2rem", md: "3rem"}
                    }}
                >
                    Exterior Painting&nbsp;&nbsp;
                    <span className="wordmean-small ls2">
                        <span
                            sx={{
                                display: {xs: "block", md: "none"}
                            }}
                        >
                            <br />
                        </span>
                        (before & afters)
                    </span>
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    pb={4}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={houseBefore1} alt="" />
                    <img className="gallery-image shadow-8" src={house1} alt="" />
                    <img className="gallery-image shadow-8" src={house2} alt="" />
                    <img className="gallery-image shadow-8" src={houseBefore2} alt="" />
                    <img className="gallery-image shadow-8" src={house3} alt="" />
                </Box>
            </Stack>

            <Stack>
                <Typography
                    className="wordmean ls2"
                    variant="h3"
                    mb={1}
                    px={2}
                    sx={{
                        fontSize: {xs: "2rem", md: "3rem"}
                    }}
                >
                    Porch Renovation
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    pb={4}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={sunroom1} alt="" />
                    <img className="gallery-image shadow-8" src={sunroom2} alt="" />
                    <img className="gallery-image shadow-8" src={sunroom3} alt="" />
                    <img className="gallery-image shadow-8" src={sunroom4} alt="" />
                </Box>
            </Stack>

            <Stack>
                <Typography
                    className="wordmean ls2"
                    variant="h3"
                    mb={4}
                    px={2}
                    sx={{
                        fontSize: {xs: "2rem", md: "3rem"}
                    }}
                >
                    Misc Projects
                </Typography>
                <Typography
                    className="wordmean-small ls2"
                    variant="h4"
                    mb={1}
                    px={2}
                >
                    Storage Closet
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    mb={8}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={storage1} alt="" />
                    <img className="gallery-image shadow-8" src={storage2} alt="" />
                </Box>
                <Typography
                    className="wordmean-small ls2"
                    variant="h4"
                    mb={1}
                    px={2}
                >
                    Basement Entrance
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    mb={8}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={basementEntrace1} alt="" />
                    <img className="gallery-image shadow-8" src={basementEntrace2} alt="" />
                </Box>
                <Typography
                    className="wordmean-small ls2"
                    variant="h4"
                    mb={1}
                    px={2}
                >
                    Custom Railing
                </Typography>
                <Box
                    width="80vw"
                    height="400px"
                    display="flex"
                    overflow="auto"
                    gap={4}
                    mb={8}
                    px={2}
                >
                    <img className="gallery-image shadow-8" src={railing1} alt="" />
                    <img className="gallery-image shadow-8" src={railing2} alt="" />
                </Box>
            </Stack>

        </Stack>
    );
}

export default GalleryPage;