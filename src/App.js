import { DataContextProvider } from "./context/DataContext";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
function App() {
  return (
    <>
      <DataContextProvider>
        <Routes />
        <GlobalStyles />
      </DataContextProvider>
    </>
  );
}

export default App;
