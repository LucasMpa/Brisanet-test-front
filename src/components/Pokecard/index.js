import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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

  function handleFavorites(pokemon) {
    if (favorites.includes(pokemon)) {
      let allFavorites = [...favorites];
      allFavorites.splice(allFavorites.indexOf(pokemon), 1);
      setFavorites(allFavorites);
    } else {
      setFavorites([...favorites, pokemon]);
    }
  }

  return (
    <Container>
      <Heart
        onClick={() => handleFavorites(data)}
        className={favorites.includes(data) ? "favorited" : ""}
      >
        {favorites.includes(data) ? <AiFillHeart /> : <AiOutlineHeart />}
      </Heart>
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
