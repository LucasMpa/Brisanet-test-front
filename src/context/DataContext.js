import React, { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getUrlPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      ).then((data) => data.json());

      let allPokemons = [];

      response.results.map(async (item) => {
        const pokemons = await fetch(item.url).then((data) => data.json());
        allPokemons.push({ ...pokemons, favorite: false });
      });

      setPokemons(allPokemons);
    };
    getUrlPokemon();
  }, []);

  return (
    <DataContext.Provider
      value={{
        pokemons,
        selectedPage,
        favorites,
        setFavorites,
        setSelectedPage,
        setPokemons,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);

  return context;
};
