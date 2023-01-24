import styled from '@emotion/styled';

export const Controls = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  label,
  input {
    display: block;
  }

  label {
    font-weight: bold;
    flex: 1;
    color: #222222;
    margin-bottom: 1rem;
  }

  input {
    flex: 3;
    font: inherit;
    padding: 0.4rem 0.4rem;
    border-radius: 7px;
    border: 1px solid #ccc;
  }

  input:focus {
    outline: none;
    border-color: #0649a0;
    background: #94bcf0;
  }

  &.invalid input {
    border-color: red;
    background: #dfc1c1;
  }

  @media (min-width: 768px) {
    .control {
      align-items: center;
      flex-direction: row;
    }
  }
`;

export const Actions = styled.div`
  text-align: center;
`;
