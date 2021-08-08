import React, { useEffect } from "react";
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
  const { darkTheme, setSelectedPage } = useDataContext();

  const jwtExample =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  useEffect(() => {
    async function handleLogin() {
      const token = localStorage.getItem("authToken");

      if (token) {
        if (token === jwtExample) {
          setSelectedPage(null);
        }
        if (token !== jwtExample) {
          return;
        }
      }
    }
    handleLogin();
  }, [setSelectedPage]);

  function doLoginAndStore() {
    localStorage.setItem("authToken", jwtExample);
    setSelectedPage(null);
  }

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
      <ActionButton onClick={() => doLoginAndStore()}>Entrar</ActionButton>
    </Container>
  );
};

export default Login;
