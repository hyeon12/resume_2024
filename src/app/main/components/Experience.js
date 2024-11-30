import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';
import { FaReact } from 'react-icons/fa';

const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }

  display: flex;
  flex-wrap: wrap;
  font-size: 1.35rem;

  .item {
    width: 0;
    flex-grow: 1;
    margin: 20px 0;
  }

  .item + .item {
    margin-left: 20px;
  }

  .content-box {
    margin: 15px 25px 0 25px;
    padding: 5px 5px 5px 25px; 
    background-color: #F4A460;
    border-radius: 9px;
    box-shadow: 5px 5px 5px #dcdcdc;
  }
`;

const Experience = () => {
  return (
    <Section>
      <Wrapper className="layout-width first">
        <Item title="✏️ EDUCATION">
          <div className="content-box">
            <p className="date">
              2024.03 - 2024.09
            </p>
            <p className="content">
              중앙정보처리학원 프로젝트 기반 JAVA 응용 SW개발자 과정
            </p>
          </div>
        </Item>
      </Wrapper>
      <Wrapper className="layout-width">
        <Item title="🗃️ WORK EXPERIENCE">
          <div className="content-box">
            <p className="date">
              2020.03 - 2024.02
            </p>
            <p className="content">
              유치원 담임교사 업무 및 원내 행사 기획, 안전교육 행정 업무 담당
            </p>
          </div>
        </Item>
      </Wrapper>
      <Wrapper className="layout-width">
        <Item title="🪪 CERTIFICATE">
          <div className="content-box">
            <p className="content">
              정보처리기사 필기 (한국산업인력공단)
            </p>
            <p className="content">
              SQLD (한국데이터베이스진흥센터)
            </p>
          </div>
        </Item>
      </Wrapper>

    </Section>
  );
};

export default React.memo(Experience);
