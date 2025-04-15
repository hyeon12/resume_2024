import React from 'react';
import { Section } from 'react-fullpage';
import Link from 'next/link';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Item from './Item';
import Image from 'next/image';
import { BsFillPersonFill, BsFillTelephoneFill, BsCalendar2CheckFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdSchool } from "react-icons/md";
import { PiCursorClickBold } from "react-icons/pi";

function GithubLink() {
  return (
    <Link href="https://github.com/hyeon12" className='active'>
      <PiCursorClickBold /> 깃허브 링크 (github.com/hyeon12)
    </Link>
  );
}

// 노션 링크 컴포넌트
function NotionLink() {
  return (
    <Link href="https://www.notion.so/MySTUDY-1298e6d3a7238044b602d43bbce4582e?pvs=4" className='active'>
      <PiCursorClickBold /> 노션 링크 (notion.so/MyStudy)
    </Link>
  );
}

const Wrapper = styled.div`
  padding-top: 51px;
  .inner {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.3rem;

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

      .linkbox {
        border: 4px solid #ddd;
        border-radius: 9px;
        padding: 15px;
        margin-top: 25px;

        a{
          display: block;
        }

        a:hover {
          color: blue;
        }

        a + a {
          margin-top: 5px;
        }
      }

      .sub-info {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      height: 35px;
      margin: 35px 0;
      }

      .sub-info svg {
        height: 25px;
        width: auto;
        margin-right: 15px;
      }

      .profile {
        position: absolute;
        margin-top: 150px;
        margin-left: 300px;
        box-shadow: 7px 7px 7px #DCDCDC;
        border-radius: 1px;
        height: 220px;
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
              <p className="sub">✅ Notion을 운영하며 다양한 주제를 포스팅합니다.</p>
              <p className="sub">✅ 프로그래머스 문제 풀이로 실력을 향상시키고 있습니다.</p>
              <p className="sub">✅ 실패를 배움의 기회로 삼고 앞으로 나아가고자 합니다.</p>
              <div className="linkbox"><GithubLink />
                <NotionLink /></div>
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
                <Image src="/images/profile.png" alt="Profile" className="profile" />
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
