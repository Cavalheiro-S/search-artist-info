import Content from './containers/Content/Content';
import { GlobalStyle } from "./assets/style/global";
import { ArtistProvider } from 'contexts/ArtistContext';
import { ContainerCatch } from 'components';
function App() {
  return (
    <>
      <GlobalStyle />
      <ArtistProvider>
        <ContainerCatch>
          <Content />
        </ContainerCatch>
      </ArtistProvider>
    </>
  );
}

export default App;
