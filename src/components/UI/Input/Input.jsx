import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Controls } from 'components/Login/Login.styled';

export const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <Controls className={`${props.isValid === false ? 'invalid' : ''}`}>
      <label htmlFor={`${props.id}`}>{props.label}</label>
      <input
        ref={inputRef}
        type={`${props.type}`}
        id={`${props.id}`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Controls>
  );
});
