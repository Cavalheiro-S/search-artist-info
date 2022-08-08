import { ArtistProvider, ResultProvider } from 'contexts';
import Router from 'routes/routes';
import { GlobalStyle } from "./assets/style/global";
import { ContainerCatch } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ArtistProvider>
        <ResultProvider>
          <ContainerCatch>
            <Router/>
          </ContainerCatch>
        </ResultProvider>
      </ArtistProvider>
    </>
  );
}

export default App;
