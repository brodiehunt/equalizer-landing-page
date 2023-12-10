import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BackgroundMobile from './assets/bg-main-mobile.png';
import BackgroundTablet from './assets/bg-main-tablet.png';
import BackgroundDesktop from './assets/bg-main-desktop.png';

const AppWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-image: url(${BackgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;



  @media (min-width: 768px) {
    background-image: url(${BackgroundTablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${BackgroundDesktop});
  }
`;

function App() {
  

  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  )
}

export default App
