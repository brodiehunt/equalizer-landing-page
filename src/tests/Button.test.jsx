import { render, screen, within} from '@testing-library/react';
import Button from '../components/Button';
import Icon from '../assets/icon-android.svg';
import { expect } from 'vitest';


describe('Main component', () => {
  beforeEach(() => {
   
    render(<Button variant="primary" text="Android download" icon={Icon}/>);
  });

  it('should render a button', () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it('Should have the correct text', () => {
    const button = screen.getByText('Android download');

    expect(button).toBeInTheDocument();
  })

  it('Should render an icon img to the screen', () => {
    const icon = screen.getByAltText('');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  })

})