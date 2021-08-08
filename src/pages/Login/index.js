import React from "react";
import {
  ActionButton,
  BackgroundPokemon,
  Container,
  LogoPokemon,
  TitleForm,
} from "./styles";
import logoPokemonLight from "../../Assets/images/pokemon-logo-light.png";
import backgroundPokemon from "../../Assets/images/login-background-light.png";
import { useDataContext } from "../../context/DataContext";

const Login = () => {
  const { darkTheme } = useDataContext();
  return (
    <Container>
      <LogoPokemon src={logoPokemonLight} alt="logo"></LogoPokemon>
      <TitleForm className={darkTheme ? "dark" : ""}>
        Comece a coletar pokémons!
      </TitleForm>
      <div>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Senha"></input>
      </div>
      <BackgroundPokemon src={backgroundPokemon} />
      <ActionButton>Entrar</ActionButton>
    </Container>
  );
};

export default Login;
