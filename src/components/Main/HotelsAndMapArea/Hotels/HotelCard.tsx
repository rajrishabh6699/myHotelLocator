import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HotelOuterContainer = styled.div`
box-sizing:border-box;
width:95%;
display:flex;
justify-content:space-between;
border:1px solid #C8C8C8;
height:auto;
margin-top:3rem;
margin-bottom:-2rem;
margin-left:1rem;
border-radius:2px;
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
color: #318ce7;
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
color:	#484848;
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
color: #318ce7;
font-size:12px;
font-weight:500;
`;

const Status = styled.p`
color: #318ce7;
font-size:10px;
`;
const HotelImage = styled.img`
width:20px;
height:20px;
`

const Information = styled.p`
color: #318ce7;
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
color: 	#787878;
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
    const fullName = `${props.entry.first_name} ${props.entry.last_name}`


    const history = useHistory()
    return (
        <HotelOuterContainer>
            <Hotel>
                <ImageDiv>
                    <Image src="https://media.cntraveler.com/photos/59dc0961d74f3663416ffe8b/master/pass/Pool-COMOMetropolitanMiamiBeach-Florida-CRHotel.jpg"
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
                        <HotelImage src="data:image/png;base64,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" />
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