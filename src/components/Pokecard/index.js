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
  Type,
} from "./styles";

const Pokecard = ({ data }) => {
  const {
    setFavorites,
    favorites,
    darkTheme,
    setContentModal,
    setVisibleModal,
  } = useDataContext();

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
    <Container className={darkTheme && "dark"}>
      <Heart
        onClick={() => handleFavorites(data)}
        className={[
          favorites.includes(data) && "favorited",
          darkTheme && "dark",
          darkTheme && favorites.includes(data) && "dark-favorited",
        ]}
      >
        {favorites.includes(data) ? <AiFillHeart /> : <AiOutlineHeart />}
      </Heart>
      <Sprite>
        <img src={data.sprites.front_default} alt={data.name} />
      </Sprite>
      <Name className={darkTheme && "dark"}>{capitalize(data.name)}</Name>
      <Id className={darkTheme && "dark"}>ID : {data.id}</Id>
      <ContainerOfTypes>
        <Type type={data.types[0].type.name}>
          {capitalize(data.types[0].type.name)}
        </Type>

        {data.types[1] && (
          <Type type={data.types[1].type.name}>
            {capitalize(data.types[1].type.name)}
          </Type>
        )}
      </ContainerOfTypes>

      <DetailsButton
        onClick={() => setVisibleModal(true)}
        onMouseDown={() => setContentModal(data)}
      >
        Ver Detalhes
      </DetailsButton>
    </Container>
  );
};

export default Pokecard;
