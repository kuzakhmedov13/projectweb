import React from 'react'
import {Container, Wrapper, MakeSureText, LearnMoreLink, EmailPreferences,
    CheckboxWrapper, CheckBoxInput, CheckBoxlabel, CreateButton, SubText} from '../Components/SignUpBottom.elements';

const SingUpBottom = () => {
    return (
        <>
        <Container>
            <Wrapper>
            <MakeSureText>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</MakeSureText>
            <LearnMoreLink>Learn more.</LearnMoreLink>
            <EmailPreferences>Email preferences</EmailPreferences>
            <CheckboxWrapper>
                <CheckBoxInput type='checkbox'/>
                <CheckBoxlabel>Send me occasional product updates, announcements, and offers.</CheckBoxlabel>
            </CheckboxWrapper>
            <CreateButton>Create account</CreateButton>
            <SubText>By creating an account, you agree to the Terms of Service. For more information about privacy practices, see the Privacy
                 Statement. We'll occasionally 
                 send you account-related emails. </SubText>
            </Wrapper>
        </Container>
            
        </>
    )
}

export default SingUpBottom
