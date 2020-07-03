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
  /* background: #fff; */
`;

export const CharacterDescription = styled.div`
  height: 60%;
  grid-template-columns: 1fr;
  background: #fff;
  border-radius: 10px;
  background: #1d1c25;
  padding: 20px;

  h4 {
    text-align: center;
    font-family: 'Roboto';
  }
`;

export const HomeWorld = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  a {
    text-decoration: none;
    color: #fff;
    align-self: center;
    text-align: center;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;

  p {
    margin-top: 15px;
    font-family: 'Roboto';
  }
`;

export const CharacterRelatedThings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 40%;
  grid-gap: 25px;
  margin-top: 20px;
`;

export const RelatedCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #1d1c25;
`;
