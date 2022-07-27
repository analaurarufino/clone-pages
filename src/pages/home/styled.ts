import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  /* flex-direction: row; --> ao lado column um em baixxo do outro */
  justify-content: center;
  padding-top: 72px;
  gap: 64px;
  /* padding: 0 50px; */
`;
export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 64px;
  color: #166fe5;
  line-height: 1.34;
  font-weight: 700;
`;
export const Description = styled.p`
  font-family: sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  color: #1c1e21;
  margin-top: -10px;
`;

export const Card = styled.div`
  padding: 10px 16px 24px 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 372px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const DivText = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: baseline;

  img {
    padding-top: 112px;
    margin-left: -28px;
    height: 106px;
  }
`;

export const Button = styled.button`
  background-color: #1877f2;
  margin-top: 6px;
  width: 100%;
  padding: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: none;
  line-height: 48px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
`;
export const ButtonGreen = styled.button`
  width: fit-content;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  line-height: 48px;
  padding: 0 16px;
  background-color: #42b72a;
  font-weight: 600;
  color: white;
`;

export const Input = styled.input`
  border: 1px solid #dddfe2;
  color: #1d2129;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 17px;
  height: 22px;
  line-height: 16px;
  padding: 14px 16px;
  margin: 6px 0px;
  border-radius: 6px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Link = styled.a`
  color: #1877f2;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #dadde1;
  border: none;
  margin: 20px 0px;
`;

export const DivCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 64px;
`;

export const FooterText = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  margin-top: 28px;
  font-size: 14px;

  a {
    font-weight: 600;
    text-decoration: none;
    color: #000;
  }
`;
