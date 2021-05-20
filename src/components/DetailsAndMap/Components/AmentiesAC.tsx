import React from 'react';
import styled from 'styled-components';
import { images } from '../../../assets';

const AcDiv = styled.div`
    margin-top:10px;
    margin-bottom:-10px;
    display:flex;
    margin-left:10px;
`;

const Ac = styled.div`          
    margin-right:25px;
    display:flex;
    align-items:center;
`;

const AcUnitIcon = styled.img`
    height:28px;
    width:28px;
`;

const AcText = styled.p`
    margin-left:10px;
    font-size:12px;
    color:#696969;
`;

const AmentiesAC:React.FC = ()=>{
    return(
        <AcDiv>
            <Ac>
                <AcUnitIcon src={images.acUnitIcon} alt="ac-unit" />
                <AcText>Air condition</AcText>
            </Ac>
            <Ac>
                <AcUnitIcon src={images.acUnitIcon} alt="ac-unit" />
                <AcText>Air condition</AcText>
            </Ac>
        </AcDiv>
    );
}

export default AmentiesAC;