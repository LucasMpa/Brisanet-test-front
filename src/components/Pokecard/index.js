import React from "react";
import { useDataContext } from "../../context/DataContext";
import { capitalize } from "../../utils/charUtils";

import {
  Container,
  ContainerOfTypes,
  DetailsButton,
  Heart,
  Id,
  Name,
  Sprite,
  TypePrimary,
  TypeSecondary,
} from "./styles";

const Pokecard = ({ data }) => {
  const { setFavorites, favorites } = useDataContext();

  return (
    <Container>
      <Heart onClick={() => setFavorites([...favorites, data])}></Heart>
      <Sprite>
        <img src={data.sprites.front_default} alt={data.name} />
      </Sprite>
      <Name>{capitalize(data.name)}</Name>
      <Id>ID : {data.id}</Id>
      <ContainerOfTypes>
        <TypePrimary>{capitalize(data.types[0].type.name)}</TypePrimary>

        {data.types[1] && (
          <TypeSecondary>{capitalize(data.types[1].type.name)}</TypeSecondary>
        )}
      </ContainerOfTypes>

      <DetailsButton>Ver Detalhes</DetailsButton>
    </Container>
  );
};

export default Pokecard;
