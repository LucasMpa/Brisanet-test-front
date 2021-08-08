import React from "react";
import {
  Actions,
  ContainerActions,
  CountFavorites,
  Logo,
  Logoff,
  Menu,
} from "./styles.js";
import LogoPokemon from "../../Assets/images/pokemon-logo-dark.png";
import { BiExit } from "react-icons/bi";
import { useDataContext } from "../../context/DataContext.js";

const HeadMenu = () => {
  const { setSelectedPage, selectedPage, favorites, darkTheme } =
    useDataContext();

  function logoff() {
    localStorage.removeItem("authToken");
    setSelectedPage("login");
  }

  return (
    <Menu className={darkTheme ? "dark" : ""}>
      <Logo src={LogoPokemon} alt="logo"></Logo>
      <ContainerActions>
        <Actions
          onClick={() => setSelectedPage("favorites")}
          className={[
            selectedPage === "favorites" ? "active" : "",
            darkTheme ? "dark" : "",
            selectedPage === "favorites" && darkTheme ? "dark-selected" : "",
          ]}
        >
          Favoritos
          {favorites.length > 0 && (
            <CountFavorites className={darkTheme ? "dark" : ""}>
              {favorites.length}
            </CountFavorites>
          )}
        </Actions>
        <Actions
          className={[
            selectedPage === "search" ? "active" : "",
            darkTheme ? "dark" : "",
            selectedPage === "search" && darkTheme ? "dark-selected" : "",
          ]}
          onClick={() => setSelectedPage("search")}
        >
          Procurar
        </Actions>
        <Actions
          className={[
            selectedPage === "seeAll" && "active",
            darkTheme && "dark",
            selectedPage === "seeAll" && darkTheme && "dark-selected",
          ]}
          onClick={() => setSelectedPage("seeAll")}
        >
          Ver Todos
        </Actions>
      </ContainerActions>
      <Logoff className={darkTheme && "dark"} onClick={() => logoff()}>
        Sair <BiExit />
      </Logoff>
    </Menu>
  );
};

export default HeadMenu;
