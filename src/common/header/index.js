import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  Addition,
  Button,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import { actionCreators } from "./store";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  getListArea() {
    const { focused, list, page } = this.props;
    const newList = list.toJS();
    const pageList = [];

    for (let i = (page - 1) * 10; i < page * 10; i++) {
      console.log(newList[i])
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }

    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
            <CSSTransition classNames="slide" in={focused} timeout={200}>
              <NavSearch
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe64d;
            </i>
            {this.getListArea(focused)}
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
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
