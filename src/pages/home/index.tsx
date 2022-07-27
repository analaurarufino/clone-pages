import React from "react";
import {
  Button,
  ButtonGreen,
  Card,
  Description,
  DivCard,
  DivText,
  Form,
  Input,
  Line,
  Link,
  MainContainer,
  FooterText,
  Title,
} from "./styled";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <DivText>
        <img
          alt="logo"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        />
        {/* <Title>Facebook</Title> */}
        <Description>
          O Facebook ajuda-te a comunicar e a partilhar com as pessoas que fazem
          parte da tua vida.
        </Description>
      </DivText>
      <DivCard>
        <Card>
          <Form>
            <Input type="email" placeholder="E-mail ou número de telemóvel" />
            <Input type="password" placeholder="Palavra-passe" />
            <Button type="submit">Iniciar sessão</Button>
          </Form>
          <Link href="https://www.youtube.com/">
            Não sabes a tua palavra-passe?
          </Link>
          <Line />
          <ButtonGreen>Criar nova conta</ButtonGreen>
        </Card>
        <FooterText>
          <a href="youtube">Cria uma Página </a>
          <p>para uma celebridade, marca ou empresa.</p>
        </FooterText>
      </DivCard>
    </MainContainer>
  );
};

export default Home;
