import React from "react";
import { Provider } from 'react-redux'
import { GlobalStyle } from "./style";
import Header from "./common/header";
import store from './store'
import './statics/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
    </Provider>
  );
}

export default App;
