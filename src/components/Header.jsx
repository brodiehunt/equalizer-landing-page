import HeaderWrapper from './styles/Header';

import Logo from '../assets/logo.svg';
import BackgroundPattern from '../assets/bg-pattern-1.svg';


const Header = () => {
  return (
    <HeaderWrapper>
      <img 
        data-testid="background-pattern"
        className="background-pattern" 
        src={BackgroundPattern} 
        alt='' 
        aria-hidden="true"/>
      <img 
        className="logo" 
        src={Logo} 
        alt="Equalizer logo"/>
      <h1>We make your music sound extraordinary.</h1>
      <p data-testid="header-paragraph">
        A system audio equalizer specifically designed for Android and iOS. 
        Freely tune the way your music sounds with a professional grade parametric 
        EQ & volumne mixer. Control bass, mids, treble, gain control, and more!
      </p>
    </HeaderWrapper>
  )
};

export default Header;