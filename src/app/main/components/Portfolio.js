import React, { useState, useCallback } from 'react';
import { Section } from 'react-fullpage';
import Image from 'next/image';
import styled from 'styled-components';
import classNames from 'classnames';

const Tab1Content = () => {
  return (
    <>
      <div className="project-box">
        <p>2024.09.02 ~ 2024.09.26 (1 Month) </p>
        <ul>
          <li>기존의 연구논문 사이트에 관심논문 추천 및 트렌드분석 서비스를 확장한 웹사이트</li>
          <li>효율적인 AWS 배포 환경 구축을 통한 운영 최적화</li>
          <li>Nivo Chart로 트렌드를 시각화하여 사용자의 편의성 향상</li>
          <li>기업 협업 과정으로 회사에서 진행하는 프로젝트에 대한 심도 깊은 이해</li>
        </ul>
      </div>
      <a href="https://drive.google.com/file/d/11b9kFR_KUik_d3qe6DElar_qREIlvNJB/view?usp=drive_link" target="_blank">
        PDF 파일 열람
      </a>
    </>
  );
};

const Tab2Content = () => {
  return (
    <>
      <div className="project-box">
        <p>2024.08.01 ~ 2024.08.31 (1 Month)</p>
        <ul>
          <li>지역 축제, 여행지에 대한 정보 제공으로 농촌지역 방문객 증가 장려를 위해 개발</li>
          <li>MSA 방식으로 서비스 분리 및 개발 유연성 강화</li>
          <li>Git 조직 관리 경험으로 Git에 대한 이해 향상</li>
        </ul>
      </div>
      <a href="https://drive.google.com/file/d/16lgwpWBquuEOxkPjKtSn2upZaLTW5cAX/view?usp=drive_link" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const Tab3Content = () => {
  return (
    <>
      <div className="project-box">
        <p>2024.06.24 ~ 2024.07.04 (11 Days) </p>
        <ul>
          <li>협업의 즐거움과 소통의 중요성을 느꼈던 프로젝트</li>
          <li>최초 웹 개발 경험(Tomcat, Gradle, Java, Oracle)</li>
          <li>최초 협업 경험(Git)</li>
        </ul>
      </div>
      <a href="https://drive.google.com/file/d/1cfQTmiYnf08azBnSlA8EOVyuVVj9qYFN/view?usp=drive_link" target="_blank">
        포켓몬 도감 PPT
      </a>
    </>
  );
};

const items = {
  tab1: {
    title: '@NonNull(학술연구 및 논문 관리 웹사이트)',
    Content: Tab1Content,
  },
  tab2: {
    title: 'JoyFarm(농촌 체험 예약 사이트)',
    Content: Tab2Content,
  },
  tab3: {
    title: '포켓몬 도감 사이트',
    Content: Tab3Content,
  },
};

const Wrapper = styled.div`
  padding-top: 100px;

  .tab-group {
    display: flex;
    height: 45px;
    border-bottom: 2px solid #000;

    li {
      padding: 0 25px;
      cursor: pointer;
      border: 1px solid #000;
      border-bottom: 0;
      margin-right: 5px;
      line-height: 42px;
      font-size: 1.4rem;
    }

    li.on {
      background: #000;
      color: #fff;
    }
  }

  .tab-content {
    padding: 20px;
  }
`;

const Portfolio = () => {
  const [item, setItem] = useState(items.tab1);
  const [tab, setTab] = useState('tab1');

  const onClick = useCallback((tab) => {
    setItem(items[tab]);
    setTab(tab);
  }, []);

  const { title, Content } = item;

  return (
    <Section>
      <Wrapper className="layout-width">
        <h2>PROJECTS</h2>

        <ul className="tab-group">
          <li
            onClick={() => onClick('tab1')}
            className={classNames({ on: tab === 'tab1' })}
          >
            학술 연구 및 논문 관리 프로젝트
          </li>
          <li
            onClick={() => onClick('tab2')}
            className={classNames({ on: tab === 'tab2' })}
          >
            농촌 체험 정보 및 예약 프로젝트
          </li>
          <li
            onClick={() => onClick('tab3')}
            className={classNames({ on: tab === 'tab3' })}
          >
            포켓몬 도감 프로젝트
          </li>
        </ul>
        <div className="tab-content">
          <div class="title">{title}</div>
          <Content />
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Portfolio);
