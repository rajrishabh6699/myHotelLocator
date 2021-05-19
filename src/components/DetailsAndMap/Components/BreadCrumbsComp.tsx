import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const BreadCrumbs = styled.div`
    margin-top: -17px;
    background-color:#f7f4f4;
    width:100vw;
    height:5vh;
`;

const BreadCrumbsUl = styled.ul`
    display:flex;
    align-items:center;
`;

const BreadCrumbsli = styled.li`
    padding-top:5px;
    font-size:15px;
    margin-right:12px;
    list-style:none;
    color:#696969;
    word-spacing: 8px;
`;

const BreadCrumbsComp: React.FC = () => {
    return (
        <BreadCrumbs>
            <BreadCrumbsUl>
                <Link to="/"><BreadCrumbsli> <HomeIcon /></BreadCrumbsli></Link>
                <Link to="/" style={{ textDecoration: 'none' }}><BreadCrumbsli> / Home </BreadCrumbsli></Link>
                <BreadCrumbsli>/ Hotel </BreadCrumbsli>
            </BreadCrumbsUl>
        </BreadCrumbs>
    )
}

export default BreadCrumbsComp;