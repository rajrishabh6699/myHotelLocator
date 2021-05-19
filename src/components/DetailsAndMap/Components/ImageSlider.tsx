

import React, { useState } from 'react';
import { carouselData } from './images';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import styled from 'styled-components';

const CarouselSection = styled.section`
    height: 100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarouselImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const CarouselDiv = styled.div`
display:flex;

    height: 100%;
    opacity: 0;
    transition-duration: 1s ease;
`;

const CarouselDivActive = styled.div`
display:flex;
    height: 100%;
    width:100%;
    opacity: 1;
    transition-duration: 1s;
`;

const ImageSlider: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const length = carouselData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <CarouselSection>
            <KeyboardArrowLeftIcon style={{ position: "relative", left: "-3px", fontSize: "1rem", color: "#000", cursor: "pointer", userSelect: "none" }} onClick={prevSlide} />
            {
                carouselData.map((slide, index) => {


                    return (

                        index === current ?
                            <>
                                <CarouselDivActive>
                                    {index === current && <CarouselImage src={slide.image} alt="hotels" />
                                    }

                                </CarouselDivActive>
                            </>

                            :
                            <CarouselDiv>
                                {index === current && <CarouselImage src={slide.image} alt="hotels" />}
                            </CarouselDiv>
                    )

                })
            }
            <KeyboardArrowRightIcon style={{ position: "relative", right: "-3px", fontSize: "1rem", color: "#000", cursor: "pointer", userSelect: "none" }} onClick={nextSlide} />

        </CarouselSection >
    );
};

export default ImageSlider