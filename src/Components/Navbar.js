import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { GiFlame } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  MobileIcon,
  NavbarButtonItem,
  NavbarButtonLink,
} from "./Navbar.elements";
import { useWindowScroll } from 'react-use';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const ScrollToProduct = () => window.scrollTo({top: 850, behavior: "smooth"})
  const ScrollToHome = () => window.scrollTo({top:0, behavior:"smooth"})
  const ScrollToServices = () => window.scrollTo({top: 2000, behavior:"smooth"})

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavbarLogo to="/">
            Zakir Kuzakhmedov
              <NavbarIcon />
            </NavbarLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavbarMenu onClick={handleClick} click={click}>
              <NavbarItem>
                <NavbarLinks to="/" onClick={() => {
                  closeMobileMenu();
                  ScrollToHome();
                }}>
                  Home
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks to="/" onClick={() => {
                  closeMobileMenu();
                  ScrollToServices();
                }}>
                  Services
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks to="/" onClick={() => {
                  closeMobileMenu();
                  ScrollToProduct();
                  
                }}>
                  Products
                </NavbarLinks>
              </NavbarItem>
              <NavbarButtonItem>
                {button ? (
                  <NavbarButtonLink to="/sign-up">
                    <Button primary colorized onClick={ScrollToHome}>
                      SIGN UP
                    </Button>
                  </NavbarButtonLink>
                ) : (
                  <NavbarButtonLink to="/sign-up">
                    <Button onClick={() => {
                     closeMobileMenu();
                     ScrollToHome();
                    }} fontBig primary colorized>
                      SIGN UP
                    </Button>
                  </NavbarButtonLink>
                )}
              </NavbarButtonItem>
            </NavbarMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
