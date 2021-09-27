import { Form,  Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const CardForm = styled(Card)`
  width: 20em !important;
  margin: 5em auto !important;
  background-color: ${(props) => props.theme.navbarBackground} !important;
  margin-bottom: 20em !important;
  @media screen and (max-width: 576px) {
    width: 95% !important;
}
`;

const CardTitle = styled(Card.Title)`
  color: ${(props) => props.theme.color} !important
`;
const FormInput = styled(Form.Control)`
  background-color: ${(props) => props.theme.navbarBackground} !important
  background-color: 'white' !important
`; 

const FormLabel = styled(Form.Label)`
  color: ${(props) => props.theme.color} !important
`; 

const FormLink = styled(Link)`
  text-decoration: none !important;
  color: ${(props) => props.theme.color} !important;
  @media screen and (max-width: 576px) {
    margin-left: -0.4em !important;
}
`;

export {
  CardForm,
  CardTitle,
  FormInput,
  FormLabel,
  FormLink
}