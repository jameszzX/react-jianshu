import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              classNames="slide"
              in={this.props.focused}
              timeout={200}
            >
              <NavSearch
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
                className={this.props.focused ? "focused" : ""}
              />
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
              &#xe64d;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  handleInputFocus() {
    this.setState({
      focused: true
    });
  }

  handleInputBlur() {
    this.setState({
      focused: false
    });
  }
}

const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
