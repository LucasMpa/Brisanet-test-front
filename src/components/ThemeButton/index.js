import React from "react";
import { BsMoon } from "react-icons/bs";
import { Container } from "./styles";

const ThemeButton = () => {
  return (
    <Container>
      <span>
        <BsMoon />
        Modo Escuro
      </span>
    </Container>
  );
};

export default ThemeButton;
