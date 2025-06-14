import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader, Nav, Social, Email, Footer } from '../Components';
import styled from 'styled-components';
import { GlobalStyle, theme } from '../styles';
import SmoothScroll from 'smooth-scroll';
const { colors, fontSizes, fonts } = theme;


var scroll = new SmoothScroll('a[href*="#"]', {

});
const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.green};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
         scroll.animateScroll(el);
        }
      }, 0);
    }
  }, [isLoading,location]);

  return (

        <div id="root">
  

          <GlobalStyle />

          <SkipToContent href="#content">Skip to Content</SkipToContent>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
