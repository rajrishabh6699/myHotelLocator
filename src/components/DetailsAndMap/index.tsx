import React from 'react';
import styled from 'styled-components';
import BreadCrumbsComp from './Components/BreadCrumbsComp';
import Details from './Components/Details';
import Map from './Components/Map'


const OuterDiv = styled.div`
    display:flex;
`;

const DetailsAndMap: React.FC = (props: any) => {
    return (
        <div>
            <BreadCrumbsComp />
            <OuterDiv>
                <Details />
                <Map />
            </OuterDiv>
        </div>
    )
}

export default DetailsAndMap;