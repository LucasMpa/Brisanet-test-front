import React from "react";
import Astronaut from "../../Assets/images/astronaut.png";
import { useDataContext } from "../../context/DataContext";
import HeadMenu from "../HeadMenu";
import { Container, Content } from "./styles";

const NoContent = () => {
  const { setSelectedPage, darkTheme } = useDataContext();
  return (
    <>
      <HeadMenu />
      <Container className={darkTheme && "dark"}>
        <Content>
          <img src={Astronaut} alt="astronaut" />
          <h2>Está meio vazio por aqui!</h2>
          <h3>Procure por pokémons para adicioná-los aos seus favoritos.</h3>
          <div onClick={() => setSelectedPage("seeAll")}>Procurar pokémons</div>
        </Content>
      </Container>
    </>
  );
};

export default NoContent;
