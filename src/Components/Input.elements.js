import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 position:relative;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 margin: 0 auto;
`;

export const Label = styled.label`

`;

export const InputField = styled.input`
display:block;
background-color: #fafbfc;
border-radius: 5px;
border: 1px solid #e1e4e8;
font-size: 20px;
width: 30%;
justify-content: center;
outline-color: #d9e8f9;
margin-bottom: 10px;


&:hover{
    
}
`;

export const TopLabel = styled.h1`
    font-size: 14px;
    font-weight: 600;
    color: #24292e;
    margin-bottom: 8px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,
    "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    
`;

export const Join = styled.h1`
font-size: 14px;
font-weight: 400;
color: #6a737d;
font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
`;

export const CreateAcc = styled.h1`
font-size: 48px;
font-weight: 500;
color: #24292e;
font-family: Inter, -apple-system, BlinkMacSystemFont,
 "Segoe UI", Helvetica, Arial, sans-serif, 
 "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
