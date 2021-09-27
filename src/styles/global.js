import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`

  * {
    font-size: 20px !important;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    background-color: ${(props) => props.theme.body};
    min-height: 100vh;
   
  } 
  h1 {
    font-size: 40px !important;
  }
`;

export default GlobalStyles; 

