import React, { useState, useEffect, useReducer, useContext } from 'react';

import { Card } from '../UI/Card/Card';
import { Button } from '../UI/Button/Button';
import { Actions, Controls } from './Login.styled';
import { AuthContext } from 'store/auth-context';

const emailReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    };
  }
  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    };
  }
  return {
    value: '',
    isValid: false,
  };
};

export const Login = props => {
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
  });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: '',
    isValid: undefined,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const ctx = useContext(AuthContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = event => {
    dispatchEmailState({ type: 'USER_INPUT', value: event.target.value });
  };

  const passwordChangeHandler = event => {
    dispatchPasswordState({ type: 'USER_INPUT', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: 'INPUT_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <Controls
          className={`${emailState.isValid === false ? 'invalid' : ''}`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </Controls>
        <Controls
          className={`${passwordState.isValid === false ? 'invalid' : ''}`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
