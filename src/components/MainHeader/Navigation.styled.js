import styled from '@emotion/styled';

export const NavWrapper = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0;
    margin-left: 3rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover,
  a:active {
    color: #b1c4db;
  }

  button {
    font: inherit;
    background: #0dd6dd;
    border: 1px solid #066d70;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    color: #0649a0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  }
`;
