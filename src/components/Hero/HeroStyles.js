import styled from "styled-components";

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.color};
  font-weight: 700 !important;
`;

const StyledText = styled.p`
  color: ${(props) => props.theme.color}
`;

const StyledImg = styled.img`
  margin-top: -1em;
  width: 80%;
  max-width: 40em;
  min-wdith: 10em;
  border-radius: 2em;
  z-index: -1;
`;

export { 
  StyledHeader,
  StyledText,
  StyledImg,
}