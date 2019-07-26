import styled from "styled-components";

export const WriteWrapper = styled.div`
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

export const WriteBox = styled.div`
  width: 400px;
  margin: 106px auto 0;
  padding: 50px 50px 60px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  .noOpen{
      text-align: center;
      font-size: 14px;
      color: #969696;
  }
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
