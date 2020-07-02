import styled from 'styled-components';

export const HeaderContent = styled.div`
  padding: 20px 0;
  background: #1d1c25;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    margin-left: 50px;
    img {
      height: 60px;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  a:hover {
    img {
      border: 1px solid #ff9000;
      transition: border 0.2s;
    }
  }

  button {
    margin-left: 70px;
    margin-right: 50px;
    background: transparent;
    border: 0;
    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }

  button:hover {
    svg {
      color: #ff9000;
      transition: 0.2s;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      text-decoration: none;
      color: #ff9000;
    }
  }
`;
