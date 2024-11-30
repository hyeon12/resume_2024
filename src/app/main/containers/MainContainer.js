'use client';
import React from 'react';
import { SectionsContainer } from 'react-fullpage';
import TopMenu from '../components/TopMenu';
import InfoAbout from '../components/InfoAbout';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Skill from '../components/Skill';

const options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
};

const MainContainer = () => {
  return (
    <>
      <TopMenu />
      <SectionsContainer {...options}>
        <InfoAbout />
        <Skill />
        <Experience />
        <Portfolio />
      </SectionsContainer>
    </>
  );
};

export default React.memo(MainContainer);
