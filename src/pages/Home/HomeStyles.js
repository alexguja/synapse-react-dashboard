import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledHomePage = styled.div`
    margin: auto;
`;

const StyledTitle = styled(Card.Title)`
    color: ${(props) => props.theme.color} !important;
    font-weight: 900 !important; 
`;

const StyledBody = styled(Card.Body)`
    border-radius: 1em !important;
    background-color: ${(props) => props.theme.navbarBackground} !important;
    
`;

const StyledText = styled(Card.Text)`
    color: ${(props) => props.theme.color} ! important
`;

export {
  StyledHomePage,
  StyledTitle,
  StyledText,
  StyledBody,
};