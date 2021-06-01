import React from 'react';
import styled from 'styled-components';
import { images } from '../../../assets';


const DataContainer = styled.div`
    margin-left:10px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const HomeIconDiv = styled.div`
`;

const HomeIcon = styled.img`
    height:30px;
    height:30px;
`;

const DetailDiv = styled.div`
    margin-left:15px;
    display:flex;
    flex-direction:column;
`;

const DetailHeading = styled.h5`
    color:#696969;
    font-weight:500;
    margin-bottom:-10px;
`;

const DetailDesc = styled.p`
    color:#696969;
    font-size:12px;
    word-spacing:5px;
`;




const InfoData:React.FC = ()=>{
    return(
        <DataContainer>
            <HomeIconDiv><HomeIcon src={images.homeIconInfo} /> </HomeIconDiv>
            <DetailDiv>
                <DetailHeading>Entire Apartment</DetailHeading>
                <DetailDesc>4 Guests 1 bedroom 4 Guests 1 bedroom</DetailDesc>
            </DetailDiv>
        </DataContainer>
    );
}

export default InfoData;