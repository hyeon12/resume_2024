import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Item from './Item';
import { BsFillPersonFill, BsFillTelephoneFill, BsCalendar2CheckFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdSchool } from "react-icons/md";

const Wrapper = styled.div`
  padding-top: 51px;
  .inner {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 0;
      flex-grow: 1;
      margin: 20px 0;
    }

    .item + .item {
      margin-left: 20px;
    }

    .inner2 {
      display: inline-block;
      margin-left: 25px;

      .main {
        font-size: 1.5rem;
      }

      .sub {
        font-size: 1.3rem;
      }

      .sub-info {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      height: 35px;
      margin: 35px 0;
      }

      .sub-info svg {
        height: 25px; /* 아이콘의 높이를 100px로 설정 */
        width: auto; /* 비율에 맞게 너비 자동 조정 */
        margin-right: 15px; /* 아이콘과 텍스트 사이에 간격 추가 */
      }

      .sub2 {
        margin-bottom: 5px;
      }

      .sub3 {
        font-size: 1.2rem; 
        margin-top: 0;
      }

    @media all and (max-width: 650px) {
      .item {
        width: 100%;
      }
      .item + .item {
        margin-left: 0;
      }
    }
  }
`;

const InfoAbout = () => {
  return (
    <Section>
      <Wrapper>
        <ProfileImage />
        <div className="layout-width inner">
          <Item title="INFO">
            <div className="inner2">
              <p className="main">성장시키던 교사에서, 스스로 성장하는 개발자로!</p>
              <p className="sub">우연한 기회로 JAVA 의 매력에 빠져 코딩을 시작하며<br />다양한 시도 끝에 풀스택 개발자를 꿈꾸게 되었습니다.</p>
              <p className="sub">CHECK LIST</p>
              <p className="sub">✅Notion을 운영하며 다양한 주제를 포스팅 중입니다.</p>
            </div>
          </Item>
          <Item title="ABOUT">
            <div className="inner2">
              <div className="sub-info">
                <BsFillPersonFill />
                <div className="sub-box">
                  <p className="sub2">이름</p>
                  <p className="sub3">서정현</p>
                </div>
              </div>
              <div className="sub-info">
                <BsCalendar2CheckFill />
                <div className="sub-box">
                  <p className="sub2">생년월일</p>
                  <p className="sub3">95.09.12</p>
                </div>
              </div>
              <div className="sub-info">
                <BsFillTelephoneFill />
                <div className="sub-box">
                  <p className="sub2">전화번호</p>
                  <p className="sub3">010-9907-2561</p>
                </div>
              </div>
              <div className="sub-info">
                <FiMail />
                <div className="sub-box">
                  <p className="sub2">이메일</p>
                  <p className="sub3">seojh912_@naver.com</p>
                </div>
              </div>
              <div className="sub-info">
                <MdSchool />
                <div className="sub-box">
                  <p className="sub2">학력</p>
                  <p className="sub3">순천향대학교 (유아교육과)</p>
                </div>
              </div>
            </div>
          </Item>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(InfoAbout);
