import React from 'react';
import HotelsContainer from './Hotels/HotelsContainer';
import MapContainer from './Map/MapContainer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';

const MainDiv = styled.div`
    width:100vw;
    display:flex;
`;

const HotelsAndMapArea: React.FC = () => {
    const { show } = useSelector((state: RootState) => state.hotels)

    return (
        <MainDiv>
            <HotelsContainer />
            {show && <MapContainer />}
        </MainDiv>
    );
}

export default HotelsAndMapArea