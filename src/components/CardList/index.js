import React from "react";
import { Container } from "./styles";
import Pokecard from "../Pokecard";
import { NotFoundMessage } from "./styles";
import { useDataContext } from "../../context/DataContext";

function CardList({ data }) {
  const { darkTheme } = useDataContext();
  if (!data.length) {
    return (
      <NotFoundMessage className={darkTheme && "dark"}>
        Nenhum pokémon foi encontrado :(
      </NotFoundMessage>
    );
  }

  return (
    <Container className={darkTheme && "dark"}>
      {data.map((pokemon, index) => {
        return <Pokecard data={pokemon} key={index} />;
      })}
    </Container>
  );
}

export default CardList;
