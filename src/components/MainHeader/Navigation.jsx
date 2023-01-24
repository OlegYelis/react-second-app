import { NavWrapper } from './Navigation.styled';

export const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <NavWrapper>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </NavWrapper>
  );
};
