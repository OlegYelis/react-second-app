import { ButtonWrapper } from './Button.styled';

export const Button = ({ type, onClick, disabled, children }) => {
  return (
    <ButtonWrapper
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
};
