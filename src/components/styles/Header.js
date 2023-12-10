import styled from 'styled-components';

const HeaderWrapper = styled.header`
  
  padding: 2.5rem 1.5rem;
  position: relative;

  .logo {
    margin-bottom: 4rem;
  }

  .background-pattern {
    display: none;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: -0.02844rem;
    margin-bottom: 1.25rem;
  }

  p {
    line-height: 1.625rem;
  }

  @media (min-width: 768px) {

    padding: 3.9rem 2.5rem;
    .logo {
      margin-bottom: 6rem;
    }

    .background-pattern {
      display: block;
      position: absolute;
      top: -2.5rem;
      right: -2.5rem;
      width: 16rem;
      height: 25rem;
    }

    h1 {
      font-size: 4rem;
      line-height: 4rem;
      letter-spacing: -0.04544rem;
      margin-bottom: 1.75rem;
      width: calc(100% - 12rem);
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      width: calc(100% - 12rem);
    }
  }

  @media (min-width: 1440px) {
    padding: 3.9rem 10.5rem;
    max-width: 1440px;
    margin: 0 auto;

    .logo {
      margin-bottom: 8rem;
    }

    .background-pattern {
      right: 0;
      width: 19.5rem;
      height: 29.25rem;
    }

    h1 {
      font-size: 5.5rem;
      line-height: 5.5rem;
      letter-spacing: -0.0625rem;
      margin-bottom: 2.5rem;
      width: calc(100% - 19rem);
    }

    p {
      font-size: 1.25rem;
      line-height: 2.125rem;
      width: calc(100% - 19rem);
    }
  }
`;

export default HeaderWrapper;