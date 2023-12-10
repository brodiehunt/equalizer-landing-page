import { render, screen, within} from '@testing-library/react';
import Main from '../components/Main';
import { expect } from 'vitest';


describe('Main component', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it('should render a main element', () => {
    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  })

  it('Should render an image', () => {
    const phoneImg = screen.getByRole('img');

    expect(phoneImg).toBeInTheDocument();
    expect(phoneImg).toHaveAttribute('alt', "Illustration of the Equalizer app open on a mobile phone.");
  })

  it('should render a decorative image that is hidden from screen readers', () => {
    const decorativeImg = screen.getByTestId('main-decorative-img');

    expect(decorativeImg).toBeInTheDocument();
    expect(decorativeImg).toHaveAttribute('alt', '');
    expect(decorativeImg).toHaveAttribute('aria-hidden', 'true');
  })

  it('should render an article element', () => {
    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
  })

  it('article should render with a title', () => {
    const article = screen.getByRole('article');
    const title = within(article).getByRole('heading', {name: "Premium EQ"})

    expect(title).toBeInTheDocument();
  })

  it('two buttons should be rendered in the article', () => {
    const article = screen.getByRole('article');

    const buttons = within(article).getAllByRole('button');

    expect(buttons.length).toBe(2);
  })
});