import React, { useContext } from 'react';
import { AuthContext } from 'store/auth-context';
import { NavWrapper } from './Navigation.styled';

export const Navigation = props => {
  const ctx = useContext(AuthContext);
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
            <button onClick={ctx.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </NavWrapper>
  );
};
