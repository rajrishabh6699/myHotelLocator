import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../redux/hotels/hotelTypes';
import {images} from '../../assets';

const NavbarDiv = styled.div`
    background-color:white;
    height:12%;
    display:flex;
    justify-content:space-between;
`;

const SearchDiv = styled.div`
    width:50vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const Search = styled.input`
    border:1px solid#C8C8C8;
    width:40vw;
    height:2rem;
    margin : 1rem;
    padding-left:1rem;
    border-radius:6px;
    box-shadow: 0px 4px 11px#C8C8C8;
    margin-right:0;

    &:hover{
        border: 1px solid#318CE7;
        color:#696969;
        box-shadow: 0px 6px 15pxrgba(14, 104, 221, 0.1);  
    }
`;

const SearchButton = styled.button`
    border:none;
    margin-left:-60px;
    height:2rem;
    background-color: white;

    &:hover{
        cursor:pointer;
        background-color: whitesmoke;
    }
`;

const ListDiv = styled.div`
    position:relative;
    width:50vw;
    @media (max-width: 680px) {
        display:none;
    }
`;

const List = styled.ul`
    position:relative;
    list-style : none;
    display:flex;
    justify-content: flex-end;
`;

const ListItem = styled.li`
    position:relative;
    margin:1rem;
    color:#696969;
    font-weight:500;
    font-size: 1rem;

    &:hover{
        cursor:pointer;
        transform: translateY(-3px);
        color:#318CE7;
        text-shadow: 0 0 0px #89CFF0;
    }
`;

const MenuIconDiv = styled.div`
    display: none;
    @media (max-width: 680px) {
        display:contents;
    }

    &:hover{
        cursor:pointer;
    }
`;

const MenuIcon = styled.img`
    height:80px;
    width:60px;
`

const BrandLogo = styled.img`
    height:70px;
    width:70px;
`;

const SearchIcon = styled.img`
    height:25px;
    width:25px;
`;

const Navbar: React.FC = () => {
    const [searchValue, setSearchValue] = useState("")

    const dispatch = useDispatch();
    return (
        <NavbarDiv>
            <SearchDiv>
                <Link to="/"><BrandLogo src={images.logoImage} onClick={() => { dispatch({ type: ActionType.SEARCH_HOTEL_DATA, payload: "" }); setSearchValue(""); }} alt="logo" /></Link>
                <Search type="text" placeholder="Search..." value={searchValue} onChange={(e) => { setSearchValue(e.target.value); dispatch({ type: ActionType.SEARCH_HOTEL_DATA, payload: e.target.value }); }} />
                <SearchButton onClick={() => { dispatch({ type: ActionType.SEARCH_HOTEL_DATA, payload: searchValue }); }}><SearchIcon src={images.searchIcon} alt="search" /></SearchButton>
            </SearchDiv>
            <ListDiv>
                <List>
                    <ListItem>Become a host</ListItem>
                    <ListItem>Register</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Help</ListItem>
                </List>
            </ListDiv>
            <MenuIconDiv>
                <MenuIcon src={images.menuIcon} alt="menu" />
            </MenuIconDiv>
        </NavbarDiv>
    )
}

export default Navbar;
