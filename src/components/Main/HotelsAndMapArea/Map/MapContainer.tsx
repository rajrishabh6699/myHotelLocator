import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { apiKey } from '../../../../keys';
import hotels from '../../../../data';

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

  const onSelect = (item: any) => {
    setCenterCoord({ lat: item.lat, lng: item.lng })
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
          options={{
            gestureHandling: 'greedy',
            fullscreenControl: true,
            streetViewControl: true,
          }}
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
                  <InfoImage src="https://media.cntraveler.com/photos/59dc0961d74f3663416ffe8b/master/pass/Pool-COMOMetropolitanMiamiBeach-Florida-CRHotel.jpg" />
                </InfoImageDiv>
                <InfoDataDiv>
                  <InfoTitle>{selected.name}</InfoTitle>
                  <InfoDesc>
                    <InfoHotelImage src="data:image/png;base64,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" />
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
