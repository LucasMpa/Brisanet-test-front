import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import CardList from "../../components/CardList/index.js";
import HeadMenu from "../../components/HeadMenu/index.js";
import { useDataContext } from "../../context/DataContext.js";
import { Container, SearchField } from "./styles";

export default function Search() {
  const [search, setSearch] = useState("");
  const { pokemons } = useDataContext();
  const selectedPokemon = pokemons.filter((pokemon) =>
    pokemon.name.startsWith(search)
  );

  return (
    <>
      <HeadMenu />
      <Container>
        <SearchField>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Procure por pokémons"
          ></input>
          <IoSearchOutline />
        </SearchField>
      </Container>
      <CardList data={selectedPokemon} />
    </>
  );
}
