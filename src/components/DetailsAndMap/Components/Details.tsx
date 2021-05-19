import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import DataTabs from './DataTabs';
import ImageSlider from './ImageSlider';


const DetailDiv = styled.div`
display:flex;
flex-direction:column;
width:25vw;
height:83vh;
@media (max-width: 576px) {
    width:100vw;
  }
`;

const ImageDiv = styled.div`
height:20vh;
width:100%;
`;

const HotelImage = styled.img`
 object-fit: cover;

width:100%;
height:100%;
`;

const HotelNameDiv = styled.div`
width:100%;
height:auto;
max-height:8vh;
border-bottom: 1px solid #c8c8c8;
text-align: center;
`;

const HotelName = styled.h3`
margin-top:10px;
color:#696969;
font-weight: 600;
`;

const Details = () => {
    interface IState {
        detail?: string;
    }

    const location = useLocation();
    const detail = (location.state as IState).detail



    return (
        <DetailDiv>
            <ImageDiv>
                {/* <ImageSlider /> */}
                <HotelImage src="https://ak.picdn.net/shutterstock/videos/6223385/thumb/1.jpg" alt="hotel" />
            </ImageDiv>

            <HotelNameDiv>
                <HotelName>{detail} Hotel</HotelName>
            </HotelNameDiv>
            <DataTabs />
        </DetailDiv>)
}

export default Details;