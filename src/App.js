import { Provider } from 'react-redux';
import ContainerCatch from "routes/ContainerCatch";
import Router from 'routes/routes';
import store from 'store/store';
import { GlobalStyle } from "./assets/style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ContainerCatch>
          <Router />
        </ContainerCatch>
      </Provider>
    </>
  );
}

export default App;
