import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

const FilterDiv = styled.div`
    border:1px solid #C8C8C8;
    display:flex;
    height:auto;
    justify-content:space-between;
    width:100vw;
`;

const ButtonDiv = styled.div`
width:80%;
display:flex;
flex-wrap:wrap;

@media (max-width: 576px) {
    width:100%;
  }
`;

const ToggleDiv = styled.div`
width:20%;
display:flex;
justify-content: flex-end;
margin-right:10px;
align-items: center;

@media (max-width: 576px) {
    display:none;
  }
`;

const ToggleP = styled.p`
font-size:14px;
color: #696969;
margin-right:10px;
margin-top:20px;
`;

const SelectButton = styled.button`
border:1px solid gray;
height:2.5rem;
margin:10px;
width:4rem;
font-size:12px;
border-radius:5px;
background-color:#fff;
color:gray;

&:hover{
    border: 1px solid #318CE7;
    color: #318CE7;
    box-shadow: 0px 8px 15px rgba(14, 104, 221, 0.1);
    cursor:pointer;
}

&:focus{
    border: 1px solid #318CE7;
    color: #318CE7;
    box-shadow: 0px 8px 15px rgba(14, 104, 221, 0.1);
}

@media (max-width: 600px) {
    height:2rem;
    width:3rem;
  }

`;


const FilterArea: React.FC = () => {

    const [clicked, setClicked] = useState(false)

    const clickToggler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setClicked(!clicked)
    }
    return (
        <FilterDiv>
            <ButtonDiv>
                <SelectButton onClick={clickToggler}>Price</SelectButton>
                <SelectButton onClick={clickToggler}>Work trip</SelectButton>
                <SelectButton onClick={clickToggler}>Price</SelectButton>
                <SelectButton onClick={clickToggler}>Work trip</SelectButton>
                <SelectButton onClick={clickToggler}>Price</SelectButton>
                <SelectButton onClick={clickToggler}>Work trip</SelectButton>
            </ButtonDiv>
            <ToggleDiv>
                <ToggleP>Show Map</ToggleP>
                <ToggleSwitch />
            </ToggleDiv>
        </FilterDiv>

    )
}

export default FilterArea


