import { Navbar } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const StyledNavbar = styled(Navbar)`
    background-color: ${(props) => props.theme.navbarBackground} !important;
    box-shadow: ${(props) => props.theme.boxShadow} !important;
}
`;

const StyledBrand = styled(Navbar.Brand)`
    font-family: 'Syncopate', sans-serif;
    color: ${(props) => props.theme.color} !important
`;


const ToggleIcon = styled.div`
    margin-left: 1em;
    margin-right: 1em;
    margin-top: -0.5em!important;
`;

const MenuIcon = styled(List)`
    color: ${(props) => props.theme.color} !important;
    size: 24 !important
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 1em !important;
    align-items: center !important;
    color: ${(props) => props.theme.color} !important;
    transition: 0.3s all ease-out !important; 
    &:hover{
        color: ${(props) => props.theme.btn} !important;
    }
`;


export {
  StyledNavbar,
  StyledBrand,
  ToggleIcon,
  MenuIcon,
  StyledLink,
}