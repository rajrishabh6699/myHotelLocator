import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import HotelCard from './HotelCard';
import { fetchHotels } from '../../../../redux';
import Loader from './Loader';
import SkeletonCard from './SkeletonCard';
import {RootState} from '../../../../redux/rootReducer';

const HotelDiv = styled.div<{ show: boolean }>`
    width: ${(props) => props.show? "50%" : "100%"};
    height:80vh;
    overflow:scroll;
    transition: all 600ms ease-in-out;

    @media (max-width: 576px) {
        width:100%;
    }
`;

const Status = styled.h1`
    font-weight:500;    
    color:#484848;
    margin-left:1rem;
    margin-top:5px;
`;

const LoadMore = styled.button`
    margin-top:-20px;
    border: 1px solid #C8C8C8;
    color:white;
    border-radius:5px;
    height:3rem;
    font-weight:600;
    background-color:#318CE7;;

    &:hover{
        cursor:pointer;
        border: 1px solid #318CE7;
        color:#318CE7;
        box-shadow: 0px 6px 15px rgba(14, 104, 221, 0.1);
        background-color:white;
    }
`;

const Skeleton = styled.div`
    height:100%;
    width:100%;
`;

interface entryType {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}

const HotelsContainer: React.FC = () => {

    const dispatch = useDispatch()
    const { loading, hotels, error, info, currentPage, searchData, show } = useSelector((state:RootState) => state.hotels)
    const size = hotels.length;

    return (
            <HotelDiv show={show}>
                {error && <Status>{error}</Status>}
                <div>
                    {searchData === "" ? <Status>{size} places to stay</Status> : <Status>Here is the matching result!</Status>}
                </div>
                <div style={{ marginTop: "-40px" }}>
                    {loading && <Skeleton><Loader /> <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></Skeleton>}
                    {searchData !== "" ? hotels.map((entry: entryType) => {
                        const fullName = `${entry.first_name} ${entry.last_name} Hotel`.toLowerCase()
                        if (fullName.includes(searchData.toLowerCase())) {
                            return <HotelCard entry={entry} />
                        }
                    })
                        :
                        hotels.map((entry: entryType) => <HotelCard entry={entry} />)}
                </div>

                <div style={{ textAlign: "center", marginTop: "55px" }}>
                    {searchData === "" && size !== info && <LoadMore onClick={() => dispatch(fetchHotels(currentPage + 1))}>Load More</LoadMore>}
                </div>
            </HotelDiv>

    )
}
export default HotelsContainer;