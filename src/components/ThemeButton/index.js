import React from "react";
import { BsMoon } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDataContext } from "../../context/DataContext";
import { Container } from "./styles";

const ThemeButton = () => {
  const { darkTheme, setDarkTheme } = useDataContext();

  function handleDarkTheme() {
    if (darkTheme) {
      document.getElementById("root").style.backgroundColor = "#F5F7FA";
    }
    if (!darkTheme) {
      document.getElementById("root").style.backgroundColor = "#1E1E1F";
    }

    setDarkTheme(!darkTheme);
  }

  return (
    <Container
      onClick={() => handleDarkTheme()}
      className={darkTheme ? "dark" : ""}
    >
      <span>
        {!darkTheme ? <BsMoon /> : <HiOutlineLightBulb />}
        {!darkTheme ? "Tema Escuro" : "Tema Claro"}
      </span>
    </Container>
  );
};

export default ThemeButton;
