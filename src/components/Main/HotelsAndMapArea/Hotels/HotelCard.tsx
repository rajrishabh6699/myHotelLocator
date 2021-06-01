import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { images } from '../../../../assets';

const HotelOuterContainer = styled.div`
    box-sizing:border-box;
    width:95%;
    display:flex;
    justify-content:space-between;
    border:1px solid #C8C8C8;
    height:auto;
    margin-top:3rem;
    margin-bottom:-2rem;
    border-radius:2px;
    margin-left:1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 576px) {
        width:92%;
    }
`
const Price = styled.div`
    display:flex;
    flex-direction:column-reverse;
    width:10vw;
    text-align:center;
    @media (max-width: 576px) {
        width:20vw;
    }
`;

const PriceContent = styled.p`
    font-weight:500;
    color:#318ce7;
    font-size:12px;
`;

const Hotel = styled.div`
    display:flex;
    justify-content:flex-start;
    width:40vw;

    @media (max-width: 576px) {
        width:80vw;
    }
`;

const ImageDiv = styled.div`
    object-fit:cover;
    background-color:yellow;
    width:50%;
    background-color:white;
    &:hover{
        cursor : pointer;
    }
`

const Image = styled.img`
    object-fit: cover;
    height:90%;
    width:90%;
    text-align: center;
    margin:10px;
`;

const DataDiv = styled.div`
    box-sizing:border-box;
    width:50%;
`

const Type = styled.p`
    color:#909090;
    font-weight:500;
    font-size:14px;
    margin-top:10px;
`;

const Title = styled.h1`
    font-weight:500;
    color:#484848;
    font-size:22px;
`
const Desc = styled.div`
    width:100%;
    background-color:#e7faf6;
    display:flex;
    justify-content: space-around;
    height:25px;
    align-items:center;
`

const Find = styled.p`
    color:#318ce7;
    font-size:12px;
    font-weight:500;
`;

const Status = styled.p`
    color:#318ce7;
    font-size:10px;
`;

const HotelImage = styled.img`
    width:20px;
    height:20px;
`

const Information = styled.p`
    color:#318ce7;
    font-size:12px;
`;

const Address = styled(Information)`
    color:#C8C8C8;
    font-size: 9px;
`;

const Details = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Review = styled(Information)`
    color:#787878;
    font-size:12px;
`;
interface entryType {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}

interface HotelCardProps {
    entry: entryType;
}

const HotelCard: React.FC<HotelCardProps> = (props) => {
    const fullName =  props.entry ? `${props.entry.first_name} ${props.entry.last_name}` : "" ;

    const history = useHistory()
    return (
        <HotelOuterContainer>
            <Hotel>
                <ImageDiv>
                    <Image src={images.cardHotelImage} alt="hotel"
                        onClick={() => {
                            history.push({
                                pathname: "/hotel",
                                state: { detail: fullName },
                            })
                        }} />
                </ImageDiv>
                <DataDiv>
                    <Type>Entire Apartment</Type>
                    <Title>{`${props.entry.first_name} ${props.entry.last_name} Hotel`}</Title>
                    <Desc>
                        <HotelImage src={images.cardHotelIcon} alt="hotel" />
                        <Find>RARE FIND</Find>
                        <Status>This place is usually booked.</Status>
                    </Desc>
                    <Information>2 guests | 1 bedroom | 3beds | 1 bath</Information>
                    <Address>3 Connection Drive, Brunswick VIC, Australia </Address>
                    <Details>
                        <Review>⭐ (4) Supermost</Review>
                    </Details>
                </DataDiv>
            </Hotel>
            <Price>
                <PriceContent>$ 99/night</PriceContent>
            </Price>
        </HotelOuterContainer>

    )
}

export default HotelCard;