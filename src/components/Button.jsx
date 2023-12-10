import styled, {css} from 'styled-components';

const buttonVariants = {
  primary: css`
    color: var(--text-light);
    background-color: var(--text-dark);

    &:hover {
      background-color: var(--turquoise);
    }

    &:focus {
      background-color: var(--turquoise);
      border: 2px solid white;
    }
  `,
  secondary: css`
    color: var(--text-dark);
    background-color: var(--text-light);

    &:hover {
      background-color: var(--yellow);
    }

    &:focus {
      background-color: var(--yellow);
      border: 2px solid white;
    }
  `,
}
const ButtonEl = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 2rem;
  letter-spacing: -0.01125rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer; 
  transition: 0.2s ease-in all;
  

  ${props =>  buttonVariants[props.$variant] || buttonVariants.primary}
`;

const Button = ({icon, text, variant}) => {
  return (
    <ButtonEl $variant={variant}>
      <img
        className="btn-icon"
        src={icon}
        alt=''
        aria-hidden="true"
      />
      {text}
    </ButtonEl>
  )
}

export default Button;