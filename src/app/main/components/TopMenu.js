'use client';
import React from 'react';
import { Header } from 'react-fullpage';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  background: #000033;
  border-bottom: 1px solid #000033;

  .layout-width {
    display: flex;
    height: 50px;

    a {
      color: #fff;
      line-height: 50px;
      padding: 0 30px;
      font-size: 1.75rem;
    }

    a:hover {
      color: #ffffcc;
    }

    @media all and (max-width: 460px) {
      a {
        padding: 0 10px;
        font-size: 1.4rem;
        letter-spacing: -0.5px;
      }
    }
  }
`;

const TopMenu = () => {
  return (
    <Header>
      <StyledNav>
        <div className="layout-width">
          <a href="#sectionOne">INFO & ABOUT</a>
          <a href="#sectionTwo">SKILLS</a>
          <a href="#sectionThree">EXPERIENCE</a>
          <a href="#sectionFour">PROJECTS</a>
        </div>
      </StyledNav>
    </Header>
  );
};

export default React.memo(TopMenu);
