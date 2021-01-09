import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscribeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterParagraph = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterFormEmail = styled.form`
  margin-bottom: 24px;
`;

export const FooterFormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &:placeholder {
    color: #242424;
  }
`;

export const FooterSubscribeButton = styled.button`
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  padding: 10px 70px;
  margin-right: 7px;
  border: 1px solid white;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: yellow;
  }
`;

export const FooterNavWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
`;

export const FooterNavSection = styled.section`
  display: flex;
`;

export const FooterSectionItems = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  @media screen and (max-width:766px){
  width:100%;
}
`;

export const FooterTitleNavigation = styled.h1`
  margin-bottom: 16px;
`;

export const FooterParagraphNavigationLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    color: #4b59f7;
  }
`;
