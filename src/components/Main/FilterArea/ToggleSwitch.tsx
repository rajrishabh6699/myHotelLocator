import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../../redux/hotels/hotelTypes';

const Switch = styled.div<{ active: boolean }>`
    width:35px;
    height:15px;
    background-color: ${(props) => props.active ? "#00acee" : "gray"};
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

const InnerCircle = styled.div<{ active: boolean }>`
    width:15px;
    height:15px;
    background-color:white;
    border-radius:50%;
    margin-left: ${(props) => props.active && "20px" };
    transition: all 300ms ease-in-out;
`;

const ToggleSwitch: React.FC = () => {
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
            <Switch active={activeState} onClick={stateToggler}>
                <InnerCircle active={activeState} />
            </Switch>
    );
}

export default ToggleSwitch;