import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <p className="subname1">신입 개발자</p>
          <span>서 정 현</span>
          <p className="subname2">Seo JungHyeon</p>
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #eae4dd url('/images/myimg.png') no-repeat calc(50% + 200px)
    bottom;
  height: 350px;
  padding: 50px 30px 10px;
  position: relative;

  @media all and (max-width: 650px) {
    & {
      background-position: center bottom;
    }
  }

  .tit {
    position: absolute;
    bottom: 10px;
    font-size: 1.5rem;

    span {
      font-size: 2.5rem;
      margin-right: 10px;
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
