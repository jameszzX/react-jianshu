import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Detail} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
