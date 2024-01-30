import styled from "styled-components";
import { ReactComponent as Mascot } from '../../assets/img/Mascot.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width:768px){
    flex-direction: column;
      }
`;

export const ImageContainer = styled.div`
  @media screen and (max-width:768px){
    display: flex;
    align-items: center; 
    justify-content: center; 
    height: 100vh;
  }
`;

export const Image = styled(Mascot)`
    width: 100vh;
  height: 100vh;
  object-fit: cover;
  @media screen and (max-width:768px){
    width: 60%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  max-width : 100%;
`;

export const FormInput = styled.input`
  height: 60px;
  width: 25rem;
  background-color: #f5f5f7;
  margin-bottom: 30px;
  padding-left: 1em;
  border-radius: 10px;
  border: none;
  `;

export const TextStyle = styled.h1`
  color: #2f3367;
`;

export const LogInButton = styled.button`
  width: 9rem;
  height: 67px;
  background-color: #007dfa;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  margin-left: 16rem;

  @media screen and (max-width:768px){
    width: 25rem;
    margin-left: 0;
  }
`;

export const SNSButton = styled.button`
  width: 13rem;   /*width: 195px;*/
  height: 54px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1em;

`;