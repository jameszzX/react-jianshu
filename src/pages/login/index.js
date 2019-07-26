import React, { PureComponent } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import LogoImg from "../../statics/login-logo.png";
import { actionCreators } from "./store";
import { LoginWrapper, LoginBox, Input, Button, Logo, Title } from "./style";

class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <Link to="/">
            <Logo>
              <img className="logo" alt="" src={LogoImg} />
            </Logo>
          </Link>
          <LoginBox>
            <Title>
              <span className="active">登录</span>
              <b>·</b>
              <span>注册</span>
            </Title>
            <Input
              className="account"
              placeholder="手机号或邮箱"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              className="password"
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <Button onClick={() => login(this.account, this.password)}>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Login);
