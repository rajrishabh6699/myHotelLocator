import React from 'react';
import styled from 'styled-components';



const HotelOuterContainer = styled.div`
box-sizing:border-box;
width:92%;
display:flex;
border:1px solid 	#C8C8C8;
height:200px;
margin-bottom:1rem;
margin-left:1rem;
border-radius:2px;
box-shadow: 0 4px 8px 0 rgba(177, 175, 175, 0.2);
padding:5px;

@media (max-width: 576px) {
    width:92%;
  }
`
const Image = styled.div`
height:190px;
width:250px;
background-color:#E8E8E8;

`;

const Data = styled.div`
display:flex;
flex-direction:column;
`;




const SkeletonCard: React.FC = () => {

    return (
        <HotelOuterContainer>
            <Image />
            <Data>
            </Data>
        </HotelOuterContainer>
    )
}

export default SkeletonCard