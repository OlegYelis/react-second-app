import React, { useState } from 'react';

import { Card } from '../UI/Card/Card';
import { Button } from '../UI/Button/Button';
import { Actions, Controls } from './Login.styled';

export const Login = ({ onLogin }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [inputPassword, setInputPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = event => {
    setInputEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && inputPassword.trim().length > 7
    );
  };

  const passwordChangeHandler = event => {
    setInputPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && inputEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(inputEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 6);
  };

  const submitHandler = event => {
    event.preventDefault();
    onLogin(inputEmail, inputPassword);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <Controls className={`${emailIsValid === false ? 'invalid' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={inputEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </Controls>
        <Controls className={`${passwordIsValid === false ? 'invalid' : ''}`}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </Controls>
        <Actions>
          <Button type="submit" disabled={!formIsValid}>
            Вход
          </Button>
        </Actions>
      </form>
    </Card>
  );
};
