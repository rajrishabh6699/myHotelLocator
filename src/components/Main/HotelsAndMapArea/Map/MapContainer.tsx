import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { apiKey } from '../../../../keys';
import hotels from '../../../../data';
import { images } from '../../../../assets';

const MapDiv = styled.div`
  height:80vh;
  width:50%;
  transition: all 200ms ease-in-out;

  @media (max-width: 576px) {
    width:0; 
  }
`;

const InfoDiv = styled.div`
  height:335px;
  width:255px;
  border :1px solid #c8c8c8;
  border-radius:5px;
`;

const InfoImageDiv = styled.div`
  object-fit:cover;
  position: relative;
  height:150px;
  width:245px;
  margin:5px; 
`
const InfoImage = styled.img`
  height:150px;
  width:100%;
`;


const InfoDataDiv = styled.div`
  position: relative;
  height:150px;
  width:240px;
  margin:15px;
  margin-top:-15px;
`;

const InfoTitle = styled.h2`
  color:#696969;
  font-weight:600;
`;

const InfoDesc = styled.div`
  background-color:#e7faf6;
  margin-top:-10px;
  display:flex;
  justify-content: flex-start;
  height:41px;
  align-items:center;
  width:220px;
`

const InfoFind = styled.p`
  color: #696969;
  font-size:14px;
  font-weight:500;
  margin-left:20px;
`;

const InfoStatus = styled.p`
  color: #696969;
  font-size:11px;
  margin-left:5px;
`;

const InfoHotelImage = styled.img`
  margin-left:10px;
  width:20px;
  height:20px;
`

const Information = styled.p`
  color: #696969;
  font-size:12px;
`;

const Address = styled(Information)`
  color:#C8C8C8;
  font-size: 9px;
`;

const Details = styled.div`
  display:flex;
  margin-top:-10px;
  align-items:baseline;
`;

const Review = styled(Information)`
  color: 	#787878;
  font-size:12px;
`;

const Price = styled(Information)`
  font-size:15px;
  margin-left:60px;
  font-weight:800;
`;



interface SelectTypes {
  id: string;
  name: string;
  lat: string;
  lng: string;
  address: string;
}


const MapContainer: React.FC = () => {
  const mapStyles = {
    height: "100%",
    width: "100%"
  };


  const [selected, setSelected] = useState<SelectTypes | null>();
  const [centerCoord, setCenterCoord] = useState({
    lat: -27.473130, lng: 153.014930
  })

  const onSelect = (item: SelectTypes) => {
    setCenterCoord({ lat: +item.lat, lng: +item.lng })
    setSelected(item);
  }



  return (
    <MapDiv>
      <LoadScript
        googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={centerCoord}
          onClick={() => setSelected(null)}
        >
          {hotels.map((item) => {
            return (
              <Marker key={item.name} position={{ lat: Number(item.lat), lng: Number(item.lng) }} onClick={() => onSelect(item)} />
            )
          })
          }

          {selected
            &&
            selected.id
            &&
            <InfoWindow position={{ lat: Number(selected.lat), lng: Number(selected.lng) }} onCloseClick={() => setSelected(null)} options={{ pixelOffset: new window.google.maps.Size(0, -42) }}>
              <InfoDiv>
                <InfoImageDiv>
                  <InfoImage src={images.cardHotelImage} alt="hotel" />
                </InfoImageDiv>
                <InfoDataDiv>
                  <InfoTitle>{selected.name}</InfoTitle>
                  <InfoDesc>
                    <InfoHotelImage src={images.cardHotelIcon} />
                    <InfoFind>RARE FIND</InfoFind>
                    <InfoStatus>This place is usually booked.</InfoStatus>
                  </InfoDesc>
                  <Information>2 guests | 1 bedroom | 3beds | 1 bath</Information>
                  <Address>{selected.address}</Address>
                  <Details>
                    <Review>⭐ (4) Supermost</Review>
                    <Price> $ 121/night</Price>
                  </Details>
                </InfoDataDiv>
              </InfoDiv>
            </InfoWindow>}

        </GoogleMap>
      </LoadScript>
    </MapDiv>
  )
}

export default MapContainer;
