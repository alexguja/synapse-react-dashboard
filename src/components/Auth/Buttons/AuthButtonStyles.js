import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
    background-color: ${(props) => props.theme.btn} !important;
    border-style: none;
    font-size: 20px !important;
    margin: 1em !important;
`;

export default StyledButton;