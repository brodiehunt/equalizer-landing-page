import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import IconFacebook from '../assets/icon-facebook.svg';
import IconInstagram from '../assets/icon-instagram.svg';
import IconTwitter from '../assets/icon-twitter.svg';

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

const Footer = () => {
  return (
    <FooterEl>
      <div className="container">
        <img
          className="logo"
          src={Logo}
          alt="Equalizer Logo"
          data-testid="footer-logo-icon"
        />
        <p data-testid="footer-paragraph">
          All rights reserved © Equalizer 2021 <br/> Have any problems? Contact us via social media <br/>or email us at <b>equalizer@example.com</b>
        </p>
      </div>
      <ul>
          <li>
            <a 
              href="https://facebook.com"
              aria-label="Visit our Facebook"
            >
              <img
                src={IconFacebook}
                alt="Visit our facebook icon link"

              />
            </a>
          </li>
          <li>
            <a 
              href="https://instagram.com"
              aria-label="Visit our Instagram"
            >
              <img
                src={IconInstagram}
                alt="Visit our Instagram icon link"

              />
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com"
              aria-label="Visit our Twitter"
            >
              <img
                src={IconTwitter}
                alt="Visit our Twitter icon link"

              />
            </a>
          </li>
        </ul>
    </FooterEl>
  )
};

export default Footer;