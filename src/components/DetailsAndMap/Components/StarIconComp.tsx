import React from 'react';
import styled from 'styled-components';
import { images } from '../../../assets';

const StarIconDiv = styled.div``;

const StarIcon = styled.img`
    width:20px;
    height:20px;
    margin-left:5px;
`;

const StarIconComp:React.FC = ()=>{
    return(
        <StarIconDiv>
            <StarIcon src={images.starIcon} />
            <StarIcon src={images.starIcon} />
            <StarIcon src={images.halfGoldStarIcon} />
            <StarIcon src={images.grayStarIcon} />
            <StarIcon src={images.grayStarIcon} />
        </StarIconDiv>
    );
}

export default StarIconComp;