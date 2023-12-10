import MainWrapper from './styles/Main';
import BackgroundPattern from '../assets/bg-pattern-2.svg';
import Phone from '../assets/illustration-app.png';
import IconApple from '../assets/icon-apple.svg';
import IconAndroid from '../assets/icon-android.svg';
import Button from './Button';



const Main = () => {
  return (
    <MainWrapper>
      <img 
        data-testid="main-decorative-img"
        className="decorative-img"
        src={BackgroundPattern}
        alt=""
        aria-hidden="true"
      />
      <img 
        className="img-phone"
        src={Phone}
        alt="Illustration of the Equalizer app open on a mobile phone."
      />
      <article>
        <h2>
          Premium EQ
        </h2>
        <p>
          Get expert-level control with a robust equalizer, volume mixer, 
          and spatial audio. Take your listening experience to a whole new 
          level and access all our incredible features!
        </p>
        <div 
          className="price"
          data-testid="price"
        >
            $4 <span>/ month</span>
        </div>
        <Button 
          variant="primary"
          text="iOS Download"
          icon={IconApple}
        />
        <Button 
          variant="secondary"
          text="Android Download"
          icon={IconAndroid}
        />

      </article>
    </MainWrapper>
  )
};

export default Main;