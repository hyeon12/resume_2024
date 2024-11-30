import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';
import { FcPlus, FcEditImage, FcCommandLine, FcParallelTasks } from "react-icons/fc";

const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }

  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .item {
    width: 100%;
    flex-grow: 1;
  }

  .box {
    padding: 19.5px 19.5px 0 19.5px;
    margin-top: 19.5px;
    margin-left: 25px;
    font-size: 1.5rem;
    background-color: #FAFAD2;
    border-radius: 9px;
    box-shadow: 5px 5px 5px #dcdcdc;
  }

  .inner-box {
    width: 
    border: 1px solid #000;
    padding: 20px;
  }

  .stat-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
  }

  .stat {
    display: flex;
    width: 130px;
    align-items: center;
    margin-right: 30px; 
    white-space: nowrap;
  }

  .stat svg {
    font-size: 1.6rem;
    margin-right: 10px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    gap: 20px;
    font-size: 1.35rem;
    margin: 0;
  }

  ul li {
    padding: 2px 20px 3px;
    border-radius: 5px;   
  }

  .stat-container {
    margin-bottom: 20px; 
  }

  @media (max-width: 650px) {
    .stat-container {
      flex-direction: column; 
    }

    ul {
      flex-wrap: wrap;
    }
  }
`;

const Skill = () => {
    return (
        <Section>
            <Wrapper className="layout-width first">
                <Item title="🧷 SKILL">
                    <div className="box">
                        <div className="inner-box">
                            <div className="stat-container">
                                <div className="stat">
                                    <FcPlus />
                                    Language
                                </div>
                                <ul>
                                    <li style={{ backgroundColor: '#4682B4	', color: '#fff' }}>Java</li>
                                    <li style={{ backgroundColor: '#FFD700', color: 'black' }}>JavaScript</li>
                                </ul>
                            </div>
                            <div className="stat-container">
                                <div className="stat">
                                    <FcEditImage />
                                    Frontend
                                </div>
                                <ul>
                                    <li style={{ backgroundColor: '#00FFFF', color: 'black' }}>React.js</li>
                                    <li style={{ backgroundColor: '#000080', color: 'white' }}>Next.js</li>
                                    <li style={{ backgroundColor: '#FF8C00', color: 'black' }}>HTML</li>
                                    <li style={{ backgroundColor: '#ADD8E6', color: 'black' }}>CSS</li>
                                </ul>
                            </div>
                            <div className="stat-container">
                                <div className="stat">
                                    <FcCommandLine />
                                    Backend
                                </div>
                                <ul>
                                    <li style={{ backgroundColor: '#ADFF2F', color: 'black' }}>Spring</li>
                                    <li style={{ backgroundColor: '#32CD32', color: 'black' }}>SpringBoot</li>
                                    <li style={{ backgroundColor: '#98FB98', color: 'black' }}>SpringSecurity</li>
                                    <li style={{ backgroundColor: '#000', color: '#fff' }}>Gradle</li>
                                    <li style={{ backgroundColor: '#FF0000', color: '#fff' }}>Oracle</li>
                                </ul>
                            </div>
                            <div className="stat-container">
                                <div className="stat">
                                    <FcParallelTasks />DevOps
                                </div>
                                <ul>
                                    <li style={{ backgroundColor: '#1E90FF', color: 'black' }}>Jenkins</li>
                                    <li style={{ backgroundColor: '#0000FF', color: '#fff' }}>Docker</li>
                                    <li style={{ backgroundColor: '#A0522D', color: '#fff' }}>AWS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
            </Wrapper >
        </Section >
    );
};

export default React.memo(Skill);
