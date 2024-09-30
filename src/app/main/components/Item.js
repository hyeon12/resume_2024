import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .item-title {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;
    padding: 0;
    margin: 0 25px 0;

    .tit {
      font-size: 1.4rem;
      margin-right: 10px;
    }

    .bar {
      flex-grow: 1;
      height: 2px;
      background: #bcbcbc;
    }
  }
`;

const Item = ({ children, title }) => {
  return (
    <Wrapper className="item">
      <div className="item-title">
        <div className="tit">{title}</div>
        <div className="bar"></div>
      </div>
      <div className="item-content">{children}</div>
    </Wrapper>
  );
};

export default React.memo(Item);
