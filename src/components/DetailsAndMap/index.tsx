import React from 'react';
import styled from 'styled-components';
import GoToComp from './Components/GoToComp';
import Details from './Components/Details';
import Map from './Components/Map'


const OuterDiv = styled.div`
    display:flex;
`;

const DetailsAndMap: React.FC = () => {
    return (
        <>
            <GoToComp />
            <OuterDiv>
                <Details />
                <Map />
            </OuterDiv>
        </>
    )
}

export default DetailsAndMap;