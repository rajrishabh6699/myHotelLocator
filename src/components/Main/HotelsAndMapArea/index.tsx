import React, {useEffect} from 'react';
import HotelsContainer from './Hotels/HotelsContainer';
import MapContainer from './Map/MapContainer';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { fetchHotels } from '../../../redux';

const MainDiv = styled.div`
    width:100vw;
    display:flex;
`;

const HotelsAndMapArea: React.FC = () => {
    const dispatch = useDispatch();
    const { show, currentPage, hotels} = useSelector((state: RootState) => state.hotels);

    useEffect(() => {
        if (hotels.length === 0){
            dispatch(fetchHotels(currentPage));
        }
    }, [])

    return (
        <MainDiv>
            <HotelsContainer />
            {show && <MapContainer />}
        </MainDiv>
    );
}

export default HotelsAndMapArea