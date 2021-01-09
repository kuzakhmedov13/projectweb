import React from 'react'
import {Container, Label, InputField, TopLabel, Join, CreateAcc} from '../Components/Input.elements';


const Input = ({
 type,
 name,
 label,
 id,
 text
    
}) => {

    return(
        <Container>
            <TopLabel>{text}</TopLabel>
            <Label>{label}</Label>
            <InputField type={type} name={name}/>
        </Container>
    )
};

export default Input;
