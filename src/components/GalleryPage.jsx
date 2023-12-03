import React, { useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material';
import { cabinet1, cabinet2, cabinet3, cabinet4 } from '../utils/constants';
import { bar1, bar2, bar3, bar4, bar5 } from '../utils/constants';
import { house1, house2, house3, houseBefore1, houseBefore2 } from '../utils/constants';

const TranslateButton = styled(Button)({
    background: "#57575b",
    borderRadius: "3px",
    border: 0,
    color: "#fff",
    '&:hover': {
        backgroundColor: '#323234',
    },
});

const GalleryPage = () => {

    // Import Variables
    
    // State Variables
    const images = [ bar1, bar2, bar3, bar4, bar5 ];
    const [position, setPosition] = useState(0);

    // Event Handlers
    const handleTranslateRight = () => {
        console.log("TRANSLATE RIGHT");
        setPosition((prevPosition) => Math.min(prevPosition + 1, images.length - 1));
    };

    const handleTranslateLeft = () => {
        console.log("TRANSLATE LEFT");
        setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
    };

    // Functions
    

    

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
                    className="engine-spaced"
                    variant="h3"
                    mb={1}
                    px={2}
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

            <Stack alignItems="center">
                <Typography
                    className="engine-spaced"
                    variant="h3"
                    mb={2}
                >
                    Custom Bar
                </Typography>
                <CarouselProvider
                    naturalSlideWidth={30}
                    naturalSlideHeight={20}
                    totalSlides={5}
                >
                    <Slider className="slider shadow-24">
                        <Slide index={0} className="slide">
                            <img className="gallery-image" src={bar1} alt="" />
                        </Slide>
                        <Slide index={1}>
                            <img className="gallery-image" src={bar2} alt="" />
                        </Slide>
                        <Slide index={2}>
                            <img className="gallery-image" src={bar3} alt="" />
                        </Slide>
                        <Slide index={3}>
                            <img className="gallery-image" src={bar4} alt="" />
                        </Slide>
                        <Slide index={4}>
                            <img className="gallery-image" src={bar5} alt="" />
                        </Slide>
                    </Slider>
                    <Box
                        display="flex"
                        justifyContent="center"
                        mt={4}
                        gap={24}
                    >
                        <ButtonBack className="carousel-btn shadow-8">Back</ButtonBack>
                        <ButtonNext className="carousel-btn shadow-8">Next</ButtonNext>
                    </Box>
                </CarouselProvider>
            </Stack>

            <Stack>
                <Typography
                    className="engine-spaced"
                    variant="h3"
                    mb={1}
                    px={2}
                >
                    Exterior Painting <span className="engine-spaced-small">(before & afters)</span>
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

        </Stack>
    );
}

export default GalleryPage;