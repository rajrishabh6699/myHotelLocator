import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../../redux/hotels/hotelTypes';

const Switch = styled.div`
width:35px;
height:15px;
background-color: ${(props) => props.theme.body};
border-radius:30px;
padding:5px;
margin-top:6px;
transition: all 300ms ease-in-out;
@media (max-width: 576px) {
    display:none;
  }

  &:hover{
      cursor:pointer;
  }
`;

const InnerCircle = styled.div`
width:15px;
height:15px;
background-color:white;
border-radius:50%;
margin-left: ${(props) => props.theme.leftMargin};
transition: all 300ms ease-in-out;

`;

const ToggleSwitch: React.FC = () => {

    const active = {
        body: "#00acee",
        leftMargin: "20px"
    }

    const notActive = {
        body: "gray",
    }

    const [activeState, setActiveState] = useState(true);

    const dispatch = useDispatch()

    const stateToggler = () => {
        if (activeState) {
            setActiveState(false)
            dispatch({ type: ActionType.SHOW_MAP, payload: !activeState })
        } else {
            setActiveState(true)
            dispatch({ type: ActionType.SHOW_MAP, payload: !activeState })
        }
    }
    return (
        <ThemeProvider theme={activeState ? active : notActive}>
            <Switch onClick={stateToggler}>
                <InnerCircle></InnerCircle>
            </Switch>
        </ThemeProvider>
    )
}

export default ToggleSwitch

// color="#00acee"
