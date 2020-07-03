import styled from 'styled-components';

import headerBackgroundImg from '../../assets/starwar.webp';

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 100px 150px;
  grid-gap: 50px;
`;

export const CategoryCard = styled.div`
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;

    img {
      height: 200px;
      width: 250px;
      border-radius: 10px;
    }

    p {
      text-align: center;
      margin-top: 7px;
      color: #fff;
    }
  }

  a:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.2s;

    img {
      border: 1px solid #ff9000;
      transition: border 0.2s;
    }
  }
`;
