import { HeaderWrapper } from './MainHeader.styled';
import { Navigation } from './Navigation';

export const MainHeader = ({ isAuthenticated, onLogout }) => {
  return (
    <HeaderWrapper>
      <h1>React Advanced</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </HeaderWrapper>
  );
};
