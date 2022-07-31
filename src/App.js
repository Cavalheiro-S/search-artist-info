import Content from './containers/Content';
import { GlobalStyle } from "./assets/style/global";
import { ArtistProvider, ResultProvider } from 'contexts';
import { ContainerCatch } from "./containers";

function App() {
  return (
    <>
      <GlobalStyle />
      <ArtistProvider>
        <ResultProvider>
          <ContainerCatch>
            <Content />
          </ContainerCatch>
        </ResultProvider>
      </ArtistProvider>
    </>
  );
}

export default App;
