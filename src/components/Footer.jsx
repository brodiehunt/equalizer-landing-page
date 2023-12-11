import FooterEl from './styles/Footer';
import Logo from '../assets/logo.svg';
import IconFacebook from '../assets/icon-facebook.svg';
import IconInstagram from '../assets/icon-instagram.svg';
import IconTwitter from '../assets/icon-twitter.svg';

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