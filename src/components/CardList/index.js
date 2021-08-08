import React from "react";
import { Container } from "./styles";
import Pokecard from "../Pokecard";
import { NotFoundMessage } from "./styles";

function CardList({ data }) {
  if (!data.length) {
    return <NotFoundMessage>Nenhum pokémon foi encontrado :(</NotFoundMessage>;
  }
  return (
    <Container>
      {data.map((pokemon, index) => {
        return <Pokecard data={pokemon} key={index} />;
      })}
    </Container>
  );
}

export default CardList;
