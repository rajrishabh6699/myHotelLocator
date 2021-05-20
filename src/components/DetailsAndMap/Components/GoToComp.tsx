import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { images } from '../../../assets';

const GoToContainer = styled.div`
    margin-top: -17px;
    background-color:#f7f4f4;
    width:100vw;
    height:5vh;
`;

const GoTo = styled.ul`
    display:flex;
    align-items:center;
`;

const GoToLinks = styled.li`
    padding-top:5px;
    font-size:15px;
    margin-right:12px;
    list-style:none;
    color:#696969;
    word-spacing: 8px;
`;

const HomeIcon = styled.img`
    height:22px;
    width:22px;
`;

const GoToComp: React.FC = () => {
    return (
        <GoToContainer>
            <GoTo>
                <Link to="/"><GoToLinks> <HomeIcon src={images.homeIconGoTo} alt="home" /></GoToLinks></Link>
                <Link to="/" style={{ textDecoration: 'none' }}><GoToLinks> / Home </GoToLinks></Link>
                <GoToLinks>/ Hotel </GoToLinks>
            </GoTo>
        </GoToContainer>
    )
}

export default GoToComp;