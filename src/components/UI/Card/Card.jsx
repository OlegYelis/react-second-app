import { CardWrapper } from './Card.styled';

export const Card = ({ className, children }) => {
  return <CardWrapper className={`${className}`}>{children}</CardWrapper>;
};
