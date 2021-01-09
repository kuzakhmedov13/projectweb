import styled from "styled-components";
import { Container } from "../globalStyles";
import { Link } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";

export const GetStartedSection = styled.section`
  color: black;
  display: flex;
  justify-content: center;

  video {
    object-fit: cover;
    width: 100%;
    height: 93vh; //972
    position: absolute;
    z-index: -1;
    padding-bottom: 0;
  }
`;

export const GetStartedContainer = styled(Container)`
  height: 93vh; //92
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  @media screen and (max-width:526px){
    height: 113vh;
  }
  @media screen and (max-width:961px){
    height: 113vh;
  }
  @media screen and (max-width:1293px){
    height: 93vh;
  }
`;

export const GetStartedTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: -100px;

@media screen and (max-width:960px){
  font-size: 60px;
}

@media screen and (max-width:750px){
  font-size: 50px;
}
@media screen and (max-width:1126px){
  font-size: 60px;
}
@media screen and (max-width:716px){
  font-size: 50px;
}
@media screen and (max-width:606px){
  font-size: 40px;
}
`;

export const GetStartedSubText = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
`;

export const GetStartedButtons = styled.ul`
  list-style: none;
  margin-top: 50px;

  @media screen and (max-width:526px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
`;

export const GetStartedButtonItem = styled.li`

@media screen and (max-width:526px){
  display: flex;
  flex-direction: column;
}
`;

export const GetStartedButtonLinks = styled(Link)`
  margin-right: 20px;

  @media screen and (max-width:526px){
  margin-bottom: 50px;
}
`;
