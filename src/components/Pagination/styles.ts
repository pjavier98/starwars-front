import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  button {
    margin: 0 5px;
    border: 0;
    background: none;
  }

  button:hover {
    color: #ff9000;
    transition: 0.2s;
  }
`;
