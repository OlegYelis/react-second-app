import { Controls } from 'components/Login/Login.styled';

export const Input = props => {
  return (
    <Controls className={`${props.isValid === false ? 'invalid' : ''}`}>
      <label htmlFor={`${props.id}`}>{props.label}</label>
      <input
        type={`${props.type}`}
        id={`${props.id}`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Controls>
  );
};
