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

const Login = () => {
  return (
    <Container>
      <LogoPokemon src={logoPokemonLight} alt="logo"></LogoPokemon>
      <TitleForm> Comece a coletar pokémons!</TitleForm>
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
