import styled from 'styled-components';
import { shade } from 'polished';
import singInBackground from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 550px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 5%;
    }

    input {
      color: #f4ede8;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      height: 50px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      color: #312e38;
      width: 100%;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')}
      }
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: background-color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')}
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')}
    }

    svg{
      margin-right: 9px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singInBackground}) no-repeat center;
  background-size: cover;
`;

