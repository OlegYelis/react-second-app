import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #0649a0;
  padding: 0 3rem;

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 10px;
  }

  h1 {
    color: white;
  }
`;
