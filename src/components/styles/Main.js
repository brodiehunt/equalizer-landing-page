import styled from 'styled-components';

const MainWrapper = styled.main`
  background-color: var(--text-dark);
  height: 37.5rem;
  border-radius: 0.75rem;
  position: relative;
  margin: 10rem auto;

  .decorative-img {
    display: block;
    margin: 0 auto;
  }

  .img-phone {
    max-width: 100%;
    width: 14rem;
    margin: 0 auto;
    position: absolute;
    top: -7rem;
    left: 50%;
    transform: translateX(-50%);
  }

  article {
    color: var(--text-light);
    width: 100%;
    max-width: 445px;
    margin: 0 auto;
    border-radius: 0.75rem;
    background-color: var(--orange);
    padding: 3rem 2.5rem;
    position: relative;
    top: -3rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 2.25rem;
  }

  .price {
    font-size: 4rem;
    line-height: 3.25rem;
    font-weight:700;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .price span {
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: -0.0125rem;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    margin: 10rem 2.5rem;
    /* margin: 0 auto; */

    .decorative-img {
      padding-top: 2.5rem;
    }

    .img-phone {
      width: 16.5rem;
      left: 14rem;
      top: -8.5rem;
    }

    article {
      width: 24rem;
      padding: 3rem;
      position: absolute;
      top: 9.5rem;
      right: 3.5rem;
    }

  };

  @media (min-width: 1440px) {
    width: calc(1440px - 21rem);
    margin: 10rem auto;

    .img-phone {
      width: 19.5rem;
    }

    article {
      width: 28rem;
      padding: 3.5rem;
      top: 5.5rem;
      right: 5rem;
    }

    h2 {
      font-size: 2.5rem;
      line-height: 3.25rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 2.125rem;
      margin-bottom: 2.5rem;
    }
  };
`;

export default MainWrapper;