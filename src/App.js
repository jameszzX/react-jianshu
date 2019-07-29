import React from "react";
import { Provider } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import store from "./store";

class App extends React.Component {
  render() {
    const { location } = this.props;
    const whiteRouter = ["/login", "/write"];
    return (
      <Provider store={store}>
        <GlobalStyle />
        {this.isHeaderShow(whiteRouter, location.pathname) ? <Header /> : null}
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/write" exact component={Write} />
        <Route path="/details/:id" exact component={Detail} />
      </Provider>
    );
  }

  isHeaderShow(routerList, name) {
    return routerList.indexOf(name) === -1;
  }
}

export default withRouter(App);
