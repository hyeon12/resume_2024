import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <p className="subname1">✈️ 끝없이 성장하는 Full-Stack 개발자</p>
          <span>서 정 현 포트폴리오</span>
          <p className="subname2">Seo Jung Hyeon</p>
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #FAF6E3 url('/images/profile.png') no-repeat calc(50% + 200px) bottom;
  background-size: contain;
  height: 270px;
  padding: 50px 60px 100px;
  position: relative;

  @media all and (max-width: 650px) {
    & {
      background-position: center bottom;
    }
  }

  .tit {
    position: absolute;
    font-size: 1.75rem;
    bottom: 10px;
    left: calc(20%);
    
    span {
      margin-right: 10px;
      font-size: 2.5rem;
    }
    .subname1 {
      margin-bottom: 5px;
      color: #777;
    }

    .subname2 {
      color: #888;
      margin-top: 5px;
    }
  }
`;

export default React.memo(StyledProfileImage);
