import React from "react";
import NoContent from "../components/NoContent";
import ThemeButton from "../components/ThemeButton";
import { useDataContext } from "../context/DataContext";
import Login from "../pages/Login";
import Search from "../pages/Search";
import SeeAll from "../pages/SeeAll";
import GlobalStyles from "../styles/GlobalStyles";

function Routes() {
  const { selectedPage, favorites } = useDataContext();
  console.log(favorites);
  return (
    <>
      <GlobalStyles />
      {selectedPage === "login" && <Login />}
      {selectedPage === null && <NoContent />}
      {selectedPage === "seeAll" && <SeeAll />}
      {selectedPage === "search" && <Search />}
      <ThemeButton />
    </>
  );
}

export default Routes;
