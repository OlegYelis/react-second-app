import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  font: inherit;
  border: 1px solid #0649a0;
  background: #0649a0;
  color: white;
  padding: 0.7rem 3rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 30px;

  &:hover,
  &:active {
    background: #265ca1;
    border-color: #265ca1;
  }

  &:focus {
    outline: none;
  }
`;
