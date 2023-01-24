import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &.login {
    width: 90%;
    max-width: 40rem;
    margin: 3rem auto;
    padding: 3rem;

    @media (max-width: 768px) {
      width: 80%;
      margin: 2rem auto;
      padding: 2rem;
    }
  }

  &.home {
    width: 90%;
    max-width: 40rem;
    padding: 2rem;
    margin: 3rem auto;
    text-align: center;

    @media (max-width: 768px) {
      width: 80%;
      margin: 2rem auto;
      padding: 2rem;
    }
  }
`;
