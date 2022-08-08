import { ArtistProvider, ResultProvider } from 'contexts';
import { GlobalStyle } from "./assets/style/global";
import { ContainerCatch } from "./containers";
import Content from './containers/Content';

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
