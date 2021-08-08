import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useDataContext } from "../../context/DataContext";
import { capitalize } from "../../utils/charUtils";
import {
  Container,
  Dialog,
  ActionButton,
  ContainerAttributes,
  Name,
  SpritesContent,
  Sprite,
  WeightAndHeight,
  ContainerTypes,
  Statics,
  Type,
  Status,
} from "./styles";

function ModalDetails({ visibility, toggle, data }) {
  const { setFavorites, favorites, darkTheme } = useDataContext();

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
    <>
      {!visibility ? (
        ""
      ) : (
        <>
          <Container visibility={visibility}>
            <Dialog className={darkTheme && "dark"}>
              <span>
                <AiOutlineClose onClick={() => toggle()} />
              </span>
              <ContainerAttributes>
                <Name>{capitalize(data.name)}</Name>
                <SpritesContent>
                  <Sprite>
                    <img src={data.sprites.front_default} alt={data.name} />
                  </Sprite>
                  <Sprite>
                    <img src={data.sprites.back_default} alt={data.name} />
                  </Sprite>
                </SpritesContent>
                <WeightAndHeight>
                  <div>{data.height + "m"}</div>
                  <div>{data.weight + "Kg"}</div>
                </WeightAndHeight>
              </ContainerAttributes>
              <ContainerTypes>
                <Type type={data.types[0].type.name}>
                  {capitalize(data.types[0].type.name)}
                </Type>
                {data.types[1] && (
                  <Type type={data.types[1].type.name}>
                    {capitalize(data.types[1].type.name)}
                  </Type>
                )}
              </ContainerTypes>
              <Statics className={darkTheme && "dark"}>
                <div>Estatísticas</div>
              </Statics>
              <Status percent={data.stats[0].base_stat}>
                <p>HP</p>
                <span>
                  <div></div>
                </span>
                <p>{data.stats[0].base_stat}</p>
              </Status>
              <Status percent={data.stats[1].base_stat}>
                <p>ATK</p>
                <span>
                  <div></div>
                </span>
                <p>{data.stats[1].base_stat}</p>
              </Status>
              <Status percent={data.stats[2].base_stat}>
                <p>DEF</p>
                <span>
                  <div></div>
                </span>
                <p>{data.stats[2].base_stat}</p>
              </Status>
              <Status percent={data.stats[3].base_stat}>
                <p>S.ATK</p>
                <span>
                  <div></div>
                </span>
                <p>{data.stats[3].base_stat}</p>
              </Status>
              <Status percent={data.stats[4].base_stat}>
                <p>S.DEF</p>
                <span>
                  <div></div>
                </span>
                <p>{data.stats[4].base_stat}</p>
              </Status>
              <Status percent={data.stats[5].base_stat}>
                <p>SPD</p>
                <span>
                  <div></div>
                </span>
                <p>{data.stats[5].base_stat}</p>
              </Status>
              <ActionButton
                onClick={() => handleFavorites(data)}
                className={favorites.includes(data) && "danger"}
              >
                {favorites.includes(data) ? "" : <BsBookmark />}
                {favorites.includes(data)
                  ? "Remover dos favoritos"
                  : "Adicionar aos favoritos"}
              </ActionButton>
            </Dialog>
          </Container>
        </>
      )}
    </>
  );
}

export default ModalDetails;
