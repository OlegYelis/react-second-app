import { useContext } from 'react';
import { AuthContext } from 'store/auth-context';
import { Home } from './Home/Home';
import { Login } from './Login/Login';
import { MainHeader } from './MainHeader/MainHeader';

export const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
};
