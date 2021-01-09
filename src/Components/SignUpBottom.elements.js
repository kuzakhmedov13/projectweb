import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 
"Segoe UI", Helvetica, Arial, sans-serif, 
"Apple Color Emoji", "Segoe UI Emoji";

`;

export const Wrapper = styled.div`
width: 30%;
display: flex;
flex-direction: column;
margin: 0 auto;
`;

export const MakeSureText = styled.p`
display:flex;
align-self: flex-start;
font-size: 12px;
font-weight: 400;
color: #586069;
margin-top: 5px;
margin-bottom: 2px;
`;

export const LearnMoreLink = styled(Link)`
display: flex;
align-self: flex-start;
color: #0366d6;
font-size: 12px;
font-weight: 400;
text-decoration: none;

`;

export const EmailPreferences = styled.h1`
font-size: 14px;
font-weight: 600px;
color: #24292e;
margin-top: 15px;
margin-bottom: 10px;
`;

export const CheckboxWrapper = styled.div`
margin-bottom: 40px;
`;

export const CheckBoxInput = styled.input`

`;

export const CheckBoxlabel = styled.label`
font-size: 14px;
font-weight: 400px;
color: #586069;
margin-left: 4px;
`;

export const CreateButton = styled.button`
align-self: center;
text-align: center;
width:100%;
color: #fff;
padding: 16px 24px;
margin-bottom: 20px;
font-size: 14px;
font-weight: 500;
background-color: #1074e7;
border: 1px solid #1074e7;
border-radius: 6px;
transition: all .3s;

&:hover{
    background-color: #0cf;
    border: 1px solid #0cf;
}

`;

export const SubText = styled.p`
width: 100%;
text-align: center;
margin-top: 20px;
 font-size: 12px;
 font-weight: 400;
 color: #24292e;
 margin-bottom: 80px;
`;