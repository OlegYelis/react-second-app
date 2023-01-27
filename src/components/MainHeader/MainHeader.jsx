import { HeaderWrapper } from './MainHeader.styled';
import { Navigation } from './Navigation';

export const MainHeader = props => {
  return (
    <HeaderWrapper>
      <h1>React Advanced</h1>
      <Navigation />
    </HeaderWrapper>
  );
};
