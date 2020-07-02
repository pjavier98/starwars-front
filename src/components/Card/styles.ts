import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  max-width: 120px;
  /* border-radius: 10px; */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;

    img {
      border: 2px solid #fff;
      height: 160px;
      width: 120px;
      border-radius: 10px;
    }

    div {
      padding: 10px;
      font-size: 14px;

      p {
        color: #fff;
        text-align: justify;
      }
    }
  }

  a:hover {
    img {
      border: 2px solid #ff9000;
      transition: 0.2s;
    }
  }
`;
