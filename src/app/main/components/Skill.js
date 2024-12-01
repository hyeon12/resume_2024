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

  .skillset {
    margin-top: 20px;
    margin-left: 25px;
    font-size: 1.3rem;
    line-height: 1.8;
  }

  .box {
    padding: 19.5px;
    margin-top: 19.5px;
    margin-left: 25px;
    font-size: 1.5rem;
    background-color: #F4A460;
    border-radius: 9px;
    box-shadow: 5px 5px 5px #dcdcdc;
  }

  .inner-box {
    background: #FAFAD2;
    margin: 20px;
    border-radius: 9px;
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
            <div className="skillset">
              JAVA 언어를 시작으로 개발의 매력에 빠져, JAVA 개발자 양성 과정을 들으며 웹 개발에 대한 기초를 학습하였습니다. 과정 중 Spring 프레임워크를 활용한 프로젝트 경험을 했으며, 성장하는 개발자가 되기 위해 지속적으로 공부하고 있습니다. 또한 Github를 활용해 프로젝트를 관리하고 커밋을 세분화하는 습관을 향상하고 있습니다.
              
            </div>
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
                  <li style={{ backgroundColor: '#A03D', color: '#fff' }}>GIT</li>
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
