import React, { PureComponent } from "react";
import { Redirect, Link } from "react-router-dom";
import LogoImg from "../../statics/login-logo.png";
import { connect } from "react-redux";
import { WriteWrapper, WriteBox, Logo, Title } from "./style";

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <WriteWrapper>
          <Link to="/">
            <Logo>
              <img className="logo" alt="" src={LogoImg} />
            </Logo>
          </Link>
          <WriteBox>
            <Title>
              <span className="active">写文章</span>
              <b>·</b>
              <span>Go</span>
            </Title>
            <p className="noOpen">暂未开发...</p>
          </WriteBox>
        </WriteWrapper>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

export default connect(
  mapState,
  null
)(Write);
