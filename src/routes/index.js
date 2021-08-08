import React from "react";
import NoContent from "../components/NoContent";
import ThemeButton from "../components/ThemeButton";
import { useDataContext } from "../context/DataContext";
import Login from "../pages/Login";
import Search from "../pages/Search";
import SeeAll from "../pages/SeeAll";
import Favorites from "../pages/Favorites";
import { Container } from "./styles";
import ModalDetails from "../components/ModalDetails";

function Routes() {
  const {
    selectedPage,
    darkTheme,
    visibleModal,
    setVisibleModal,
    contentModal,
  } = useDataContext();

  return (
    <Container className={darkTheme ? "dark" : ""}>
      <ModalDetails
        visibility={visibleModal}
        toggle={() => setVisibleModal(!visibleModal)}
        data={contentModal}
      />
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
