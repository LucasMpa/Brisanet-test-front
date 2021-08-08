import React from "react";
import CardList from "../../components/CardList";
import HeadMenu from "../../components/HeadMenu";
import { useDataContext } from "../../context/DataContext";

import { Container, TitlePage } from "./styles";

function Favorites() {
  const { favorites, setSelectedPage, darkTheme } = useDataContext();

  if (favorites.length === 0) {
    setSelectedPage(null);
  }

  return (
    <>
      <HeadMenu />
      <Container className={darkTheme && "dark"}>
        <TitlePage>
          Olá, você tem {favorites.length} pokémon(s) salvos!
        </TitlePage>
      </Container>
      <CardList data={favorites} />
    </>
  );
}

export default Favorites;
