import React, {useState} from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { apiKey } from '../../../keys';
import { images } from '../../../assets';

const MapDiv = styled.div`
    width:75vw;
    height:83vh;
    @media (max-width: 576px) {
        width:0;
    }
`;

const InfoDataDiv = styled.div`
    height:210px;
    width:240px;
    border:1px solid#c8c8c8;
`;

const InfoImageDiv = styled.div`
    object-fit:cover;
    position:relative;
    height:120px;
    width:230px;
    margin:5px; 
`;

const InfoImage = styled.img`
    height:120px;
    width:100%;
`;

const InfoTitle = styled.h2`
    color:#696969;
    font-weight:600;
    margin-left:20px;
    margin-top:0;
`;
const InfoAdd = styled.p`
    color: #696969;
    font-size:14px;
    margin-left:20px;
    margin-top:-15px;
`;


const Map: React.FC = () => {
    const mapStyles = {
        height: "100%",
        width: "100%"
    }

    const defaultCenter = {
        lat: 28.44625, lng: 77.04402
    }


    const [wind, setWind] = useState(false)
    return (
        <MapDiv>
            <LoadScript
                googleMapsApiKey={apiKey}>
                <GoogleMap mapContainerStyle={mapStyles} onClick={() => setWind(false)} zoom={13} center={defaultCenter}>
                    <Marker position={defaultCenter} onClick={() => setWind(!wind)} />
                    {wind
                        &&
                        <InfoWindow position={defaultCenter} onCloseClick={() => setWind(!wind)} options={{ pixelOffset: new window.google.maps.Size(0, -42) }}  >
                            <InfoDataDiv>
                                <InfoImageDiv>
                                    <InfoImage src={images.detailMapInfoWindow} />
                                </InfoImageDiv>
                                <InfoTitle>LocoNav</InfoTitle>
                                <InfoAdd>B-13/14, LocoNav ThinkValley, Sector 32, Gurugram, Haryana 122003</InfoAdd>
                            </InfoDataDiv>
                        </InfoWindow>}
                </GoogleMap>
            </LoadScript>
        </MapDiv>
    );
}

export default Map;