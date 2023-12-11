import styled from 'styled-components';

const FooterEl = styled.footer`
  padding: 1.5rem;
  margin: 2rem auto;
  margin-top: 28rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .logo {
    width: 9.13rem;
  }

  p {
    line-height: 1.625rem;
  }

  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    gap: 2rem;
  }

  a {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
    margin-top: 12rem;
    display: flex;
    justify-content: space-between;

    .container {
      margin-bottom: 0;
    }

    ul {
      margin-top: auto;
    }
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 2.5rem 10.5rem;
  }

`;

export default FooterEl;