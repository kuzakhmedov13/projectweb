import React from "react";
import {
  FooterContainer,
  FooterSubscribeSection,
  FooterTitle,
  FooterParagraph,
  FooterFormEmail,
  FooterNavWrapper,
  FooterNavSection,
  FooterTitleNavigation,
  FooterParagraphNavigationLink,
  FooterSectionItems,
  FooterFormInput,
} from "../Components/Footer.elements";
import { Button } from "../globalStyles";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscribeSection>
          <FooterTitle>
            Join the Adventure newsletter to receive our best vacation deals
          </FooterTitle>
          <FooterParagraph>You can unsubscribe at any time.</FooterParagraph>
          <FooterFormEmail>
            <FooterFormInput
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </FooterFormEmail>
          <Button fontBig primary colorized insideDistance leftRight>
            Subscribe
          </Button>
        </FooterSubscribeSection>
        <FooterNavSection>
          <FooterNavWrapper>
            <FooterSectionItems>
              <FooterTitleNavigation> About Us </FooterTitleNavigation>
              <FooterParagraphNavigationLink>
                {" "}
                How it Works{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Testimonials{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Careers{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Investors{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Terms of Service{" "}
              </FooterParagraphNavigationLink>
            </FooterSectionItems>
            <FooterSectionItems>
              <FooterTitleNavigation> Contact Us </FooterTitleNavigation>
              <FooterParagraphNavigationLink>
                {" "}
                Contact{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Support{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Destinations{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Sponsorships{" "}
              </FooterParagraphNavigationLink>
            </FooterSectionItems>
          </FooterNavWrapper>
          <FooterNavWrapper>
            <FooterSectionItems>
              <FooterTitleNavigation> Videos </FooterTitleNavigation>
              <FooterParagraphNavigationLink>
                {" "}
                Submit Video{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Ambassadors{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Agency{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Influencer{" "}
              </FooterParagraphNavigationLink>
            </FooterSectionItems>
            <FooterSectionItems>
              <FooterTitleNavigation> Social Media </FooterTitleNavigation>
              <FooterParagraphNavigationLink>
                {" "}
                Instagram{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Facebook{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Youtube{" "}
              </FooterParagraphNavigationLink>
              <FooterParagraphNavigationLink>
                {" "}
                Twitter{" "}
              </FooterParagraphNavigationLink>
            </FooterSectionItems>
          </FooterNavWrapper>
        </FooterNavSection>
      </FooterContainer>
    </>
  );
};

export default Footer;
