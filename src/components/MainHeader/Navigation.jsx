import { AuthContext } from 'store/auth-context';
import { NavWrapper } from './Navigation.styled';

export const Navigation = ({ onLogout }) => {
  return (
    <AuthContext.Consumer>
      {ctx => {
        return (
          <NavWrapper>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Пользователи</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Админ</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Выйти</button>
                </li>
              )}
            </ul>
          </NavWrapper>
        );
      }}
    </AuthContext.Consumer>
  );
};
