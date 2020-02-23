import React from 'react';

import Container from '~/layout/Container';

const Header = () => (
  <header>
    <Container>
      <div className="container header__wrap">
        <h1 className="header__title">
          <span>Джуность</span>
          <div id="fb-root"></div>
          <script
            async=""
            defer=""
            crossorigin="anonymous"
            src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&amp;version=v4.0&amp;appId=2504370636459317&amp;autoLogAppEvents=1"
          ></script>
          <div
            className="fb-like"
            data-href="https://anmedio.github.io/grades/"
            data-width=""
            data-layout="button_count"
            data-action="like"
            data-size="small"
            data-show-faces="true"
            data-share="false"
          ></div>
        </h1>
        <div className="header__descr">
          <p>
            Объективные грейды для развития специалистов сферы digital,
            предложенные и развиваемые профессиональным сообществом.
          </p>
          <br />
          <a className="about">О проекте</a>
          <a className="help">Как это работает?</a>
        </div>
        <a href="https://github.com/anmedio/grades" target="_blank">
          <img className="header__logo" src="static/img/logo.svg" alt="git" />
        </a>
      </div>
    </Container>
  </header>
);

export default Header;
