import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`;

export const Button = styled.button`
  padding: ${({ insideDistance }) =>
    insideDistance ? "10px 70px" : "10px 20px 10px 20px"};
  color: ${({ colorized }) => (colorized ? "#fff" : "black")};
  background: ${({ primary }) => (primary ? "transparent" : "white")};
  border: 2px solid #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  outline: none;
  margin-right: ${({ leftRight }) => (leftRight ? "7px" : "")};

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#4b59f7" : "#4b59f7")};
    border: 2px solid transparent;
  }
  @media screen and (max-width:526px){
    font-size: ${({ fontBig }) => (fontBig ? "30px" : "16px")};
}
`;

export default GlobalStyle;
