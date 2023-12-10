import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
// Check header renders to the screen
// Check h1 renders to the screen
// check p renders to the screen
// check logo renders to the screen
// check logo has correct alt tag
// check the decorative image renders to the screen but is hidden to screen readers

describe("Header component", () => {
  beforeEach(() => {
    render(<Header />);
  })

  it('Should Render header to the screen', () => {
    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  })

  it("Should render the correct h1 page title", () => {
    const title = screen.getByRole('heading', {name: 'We make your music sound extraordinary.'});

    expect(title).toBeInTheDocument();
  })

  it("should render header intro p tag", () => {
    const paragraph = screen.getByTestId('header-paragraph');

    expect(paragraph).toBeInTheDocument();
  })

  it('Should render the decorative image, but be hidden from screen readers', () => {
    const backgroundImg = screen.getByTestId('background-pattern');

    expect(backgroundImg).toHaveAttribute('alt', '');
    expect(backgroundImg).toHaveAttribute('aria-hidden', 'true');
  })

  it('Should render logo image with correct alt attribute', () => {
    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Equalizer logo');
  })
})