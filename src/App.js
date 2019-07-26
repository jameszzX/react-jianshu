import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from './pages/write'
import store from "./store";

class App extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          {location.pathname !== "/login" ? <Header /> : null}
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
          <Route path="/details/:id" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withRouter(App);
