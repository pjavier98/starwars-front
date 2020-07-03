import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 235px;
  background: #1d1c25;
  padding: 20px;
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      color: #ff9000;
    }

    h4,
    p {
      margin-left: 10px;
      font-family: 'Roboto';
    }

    p {
    }

    & + div {
      margin-top: 15px;
    }
  }
`;
