import React from "react";
import NoContent from "../components/NoContent";
import ThemeButton from "../components/ThemeButton";
import { useDataContext } from "../context/DataContext";
import Login from "../pages/Login";
import Search from "../pages/Search";
import SeeAll from "../pages/SeeAll";
import Favorites from "../pages/Favorites";
import { Container } from "./styles";

function Routes() {
  const { selectedPage, favorites, darkTheme } = useDataContext();
  console.log(favorites);
  return (
    <Container className={darkTheme ? "dark" : ""}>
      {selectedPage === "favorites" && <Favorites />}
      {selectedPage === "login" && <Login />}
      {selectedPage === null && <NoContent />}
      {selectedPage === "seeAll" && <SeeAll />}
      {selectedPage === "search" && <Search />}
      <ThemeButton />
    </Container>
  );
}

export default Routes;
