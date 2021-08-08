import { DataContextProvider } from "./context/DataContext";
import Routes from "./routes";
function App() {
  return (
    <>
      <DataContextProvider>
        <Routes />
      </DataContextProvider>
    </>
  );
}

export default App;
