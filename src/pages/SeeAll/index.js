import React, { useState } from "react";
import CardList from "../../components/CardList";
import HeadMenu from "../../components/HeadMenu";
import { useDataContext } from "../../context/DataContext";
import { capitalize } from "../../utils/charUtils";

import { Container, FilterCategory } from "./styles";

function SeeAll() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const { pokemons } = useDataContext();

  function showAllCategories() {
    const getEachType = pokemons.map((data) => {
      return data.types[0].type.name;
    });

    const allTypes = getEachType.filter(function (elem, pos, self) {
      return self.indexOf(elem) === pos;
    });
    return allTypes;
  }

  function showTypeOfPokemon(filter) {
    let obj = [];
    const searchByType = pokemons.map((data) => {
      return data;
    });

    const primaryType = searchByType.filter(
      (data) => data.types[0].type.name === filter
    );

    const secondaryType = searchByType.filter((data) =>
      data.types[1] ? data.types[1].type.name === filter : ""
    );

    primaryType.map((data) => {
      return obj.push(data);
    });

    secondaryType.map((data) => {
      return obj.push(data);
    });

    return obj;
  }

  return (
    <>
      <HeadMenu />
      <Container>
        <FilterCategory
          className={selectedCategory === 0 ? "active" : ""}
          onClick={() => setCategory(pokemons)}
          onMouseDown={() => setSelectedCategory(0)}
        >
          Todos
        </FilterCategory>
        {showAllCategories().map((category, index) => {
          return (
            <FilterCategory
              className={selectedCategory === index + 1 ? "active" : ""}
              onClick={() => setCategory(showTypeOfPokemon(category))}
              onMouseDown={() => setSelectedCategory(index + 1)}
            >
              {capitalize(category)}
            </FilterCategory>
          );
        })}
      </Container>
      <CardList data={category} />
    </>
  );
}

export default SeeAll;
