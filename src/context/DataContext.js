import React, { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPage, setSelectedPage] = useState("login");
  const [darkTheme, setDarkTheme] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [contentModal, setContentModal] = useState();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getUrlPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      ).then((data) => data.json());

      let allPokemons = [];

      response.results.map(async (item) => {
        const pokemons = await fetch(item.url).then((data) => data.json());
        allPokemons.push({ ...pokemons });
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
        darkTheme,
        visibleModal,
        contentModal,
        setContentModal,
        setVisibleModal,
        setDarkTheme,
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
