import { ArtistProvider, ResultProvider } from 'contexts';
import Router from 'routes/router';
import { GlobalStyle } from "./assets/style/global";
import { ContainerCatch } from "./routes";
import Content from './routes/SearchScreen';

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
