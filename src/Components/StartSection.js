import React from "react";
import {
  GetStartedSection,
  GetStartedContainer,
  GetStartedTitle,
  GetStartedSubText,
  GetStartedButtons,
  GetStartedButtonItem,
  GetStartedButtonLinks,
} from "./StartSection.elements";
import { Button } from "../globalStyles";
import { IconContext } from "react-icons/lib";
import Earth from "../Videos/Earth.mp4";


const StartSection = () => {
  return (
    <>
      <GetStartedSection>
        <video className="videoTag" autoPlay loop muted>
          <source src={Earth} type="video/mp4" />
        </video>
        <GetStartedContainer>
          <GetStartedTitle>ADVENTURE AWAITS</GetStartedTitle>
          <GetStartedSubText>What are you waiting for?</GetStartedSubText>
          <GetStartedButtons>
            <GetStartedButtonItem>
              <GetStartedButtonLinks to="/sign-up">
                <Button fontBig primary colorized>
                  GET STARTED{" "}
                </Button>
              </GetStartedButtonLinks>
              <GetStartedButtonLinks to="/trailer">
                <Button fontBig primary={false} colorized={false}>
                  WATCH TRAILER{" "}
                </Button>
              </GetStartedButtonLinks>
            </GetStartedButtonItem>
          </GetStartedButtons>
        </GetStartedContainer>
      </GetStartedSection>
    </>
  );
};

export default StartSection;
