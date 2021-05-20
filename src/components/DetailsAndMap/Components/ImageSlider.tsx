import React, { useState } from 'react';
import styled from 'styled-components';
import { images } from '../../../assets';

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

const ChangeImage = styled.img`
    height:10px;
    width:10px;
    cursor:pointer;
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
    const length = images.carouselData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <CarouselSection>
            <ChangeImage src={images.leftIcon} onClick={prevSlide} />
            {
                images.carouselData.map((slide, index) => {


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
            <ChangeImage src={images.rightIcon} onClick={nextSlide} />

        </CarouselSection >
    );
};

export default ImageSlider