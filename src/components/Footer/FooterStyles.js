import { Facebook, Twitter, Linkedin, Instagram } from "react-bootstrap-icons"; 
import styled from "styled-components";

const FooterSection = styled.div`
    background-color: ${(props) => props.theme.navbarBackground} !important;

    @media screen and (max-width: 1200px) {
        margin-top: 10em;
    }
    @media screen and (max-width: 992px) {
        margin-top: 10em;
    }
    
    @media screen and (max-width: 768px) {
        margin-top: 5em;
    }

    @media screen and (max-width: 576px) {
        margin-top: 2em;
    }
`;

const WrapperSection = styled.section`
    background-color: ${(props) => props.theme.navbarBackground} !important;
`;

const FooterText = styled.div`
    color: ${(props) => props.theme.footerText}
`;

const FacebookIcon = styled(Facebook)`
    color: ${(props) => props.theme.secondary} !important;
    transition: 0.3s all ease-out;
    margin-bottom: 1em;
    &:hover {
        color: ${(props) => props.theme.iconHover} !important;
    }
    font-size: 25px !important;
`;

const TwitterIcon = styled(Twitter)`
    color: ${(props) => props.theme.secondary};
    margin-bottom: 1em;
    transition: 0.3s all ease-out;
    &:hover {
        color: ${(props) => props.theme.iconHover};
    }
    font-size: 25px !important;
`;

const LinkedinIcon = styled(Linkedin)`
    color: ${(props) => props.theme.secondary};
    margin-bottom: 1em;
    transition: 0.3s all ease-out;
    &:hover {
        color: ${(props) => props.theme.iconHover} 
    }
    font-size: 25px !important;
`;

const InstaIcon = styled(Instagram)`
    color: ${(props) => props.theme.secondary};
    margin-bottom: 1em;
    transition: 0.3s all ease-out;
    &:hover {
        color: ${(props) => props.theme.iconHover} !important;
    }
    font-size: 25px !important;
`;

export {
    FooterSection,
    WrapperSection,
    FooterText,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    InstaIcon,
}