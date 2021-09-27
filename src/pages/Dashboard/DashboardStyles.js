import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card.Body)`
    background-color: ${(props) => props.theme.body} !important;
    
    // @media screen and (max-width: 1500px) {
    //     width: 25em !important;
    //     height: 15em !important;

    // @media screen and (max-width: 1200px) {
    //     width: 18em !important;
    //     height: 10em !important;
    // }

    // @media screen and (max-width: 992px) {
    //     width: 15em !important
    //     margin-bottom: 2em !important;
    // }
    
    // @media screen and (max-width: 768px) {
    //     width: 22em !important;
    //     margin-bottom: 2em !important;
    // } 

    // @media screen and (max-width: 576px) {
    //     width: 20em !important;
    //     margin-bottom: 1em !important;
    // }
    
    // @media screen and (max-width: 520px) {
    //     width: 20em !important;
    //     margin-bottom: 1em !important;
    // }
    
    // @media screen and (max-width: 500px) {
    //     width: 17em !important;
    //     margin-bottom: 1em !important;
    // } 
 `;

const StyledTitle = styled(Card.Title)`
    color: ${(props) => props.theme.color} ! important;
`;

const DashboardHeader = styled.h2`
    color: ${(props) => props.theme.color};
`;
const DashboardBtn = styled(Button)`
    width: 8em !important;
    margin: 0.2em !important;
    background-color: transparent!important;
    color: ${(props) => props.theme.color} !important;
    border-style: none !important;
`;


export {
    StyledCard,
    StyledTitle,
    DashboardBtn,
    DashboardHeader,
}