import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  padding: 50px 50px;
  grid-gap: 15px;
`;

export const Modal = styled.div`
  background-color: #0e0a14ef;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 400ms;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 10%;
  position: relative;

  button {
    position: absolute;
    top: 30px;
    right: 50px;
    background: none;
    border: 0;

    svg {
      border: 0;
      color: #ff9000;
    }
  }
`;

export const ModalContent = styled.div`
  height: 80%;
  width: 70%;
  margin: 50px;
`;

export const StarshipDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;

  border-radius: 10px;
  background: #1d1c25;
  padding: 20px;

  div {
    h4 {
      text-align: center;
      font-family: 'Roboto';
    }
    div {
      display: flex;
      align-items: center;
      margin-top: 15px;

      svg {
        color: #ff9000;
      }

      p {
        text-align: center;
        font-family: 'Roboto';
        margin-left: 10px;
      }
    }
  }
`;
