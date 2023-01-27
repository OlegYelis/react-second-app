import { HeaderWrapper } from './MainHeader.styled';
import { Navigation } from './Navigation';

export const MainHeader = ({ onLogout }) => {
  return (
    <HeaderWrapper>
      <h1>React Advanced</h1>
      <Navigation onLogout={onLogout} />
    </HeaderWrapper>
  );
};
