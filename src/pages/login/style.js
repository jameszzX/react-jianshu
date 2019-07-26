import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  z-inde: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #eee;
`;

export const Logo = styled.div`
  position: absolute;
  top: 56px;
  margin-left: 50px;
  .logo {
    width: 100px;
  }
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 106px auto 0;
  padding: 50px 50px 60px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 50px;
  line-height: 50px;
  padding: 4px 12px 4px 15px;
  background-color: hsla(0,0%,71%,.1);
  margin: 0 auto;
  box-sizing: border-box;
  color: #333;
  outline: none;
  font-size: 14px;
  &.account {
    border-radius: 4px 4px 0 0;
    border: 1px solid #c8c8c8;
  }
  &.password {
    border-radius: 0 0 4px 4px;
    border-left: 1px solid #c8c8c8;
    border-right: 1px solid #c8c8c8;
    border-bottom: 1px solid #c8c8c8;
    border-top: none;
  }
  &::-webkit-input-placeholder { /* WebKit browsers */
    color: #999;
  }
  
  &::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #999;
  }
  
  &:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #999;
  }   
`;

export const Button = styled.div`
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  padding: 9px 18px;
  border-radius: 25px;
  margin: 50px auto 0;
  text-align: center;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
`;

export const Title = styled.div`
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #969696;
  text-align: center;
  span,b {
    padding: 10px;
    font-weight: 700;
  }
  span {
      cursor: pointer;
  }
  .active {
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`;
