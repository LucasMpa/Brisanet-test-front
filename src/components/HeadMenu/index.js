import React from "react";
import { Actions, ContainerActions, Logo, Logoff, Menu } from "./styles.js";
import LogoPokemon from "../../Assets/images/pokemon-logo-dark.png";
import { BiExit } from "react-icons/bi";
import { useDataContext } from "../../context/DataContext.js";

const HeadMenu = () => {
  const { setSelectedPage, selectedPage } = useDataContext();
  return (
    <Menu>
      <Logo src={LogoPokemon} alt="logo"></Logo>
      <ContainerActions>
        <Actions
          onClick={() => setSelectedPage(null)}
          className={selectedPage === null ? "active" : ""}
        >
          Favoritos
        </Actions>
        <Actions
          className={selectedPage === "search" ? "active" : ""}
          onClick={() => setSelectedPage("search")}
        >
          Procurar
        </Actions>
        <Actions
          className={selectedPage === "seeAll" ? "active" : ""}
          onClick={() => setSelectedPage("seeAll")}
        >
          Ver Todos
        </Actions>
      </ContainerActions>
      <Logoff onClick={() => setSelectedPage("login")}>
        Sair <BiExit />
      </Logoff>
    </Menu>
  );
};

export default HeadMenu;
