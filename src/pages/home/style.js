import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  padding-top: 58px;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 18px;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const TopicMore = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  font-size: 14px;
  color: #787878;
  cursor: pointer;
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #000;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  margin-bottom: 6px;
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const RecommendDownload = styled.div`
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  .qrcode {
      width: 100px;
      opacity: .85;
      margin-right: 10px;
  }
  .title {
      font-size: 15px;
      color: #333;
  }
  .desc {
      margin-top: 10px;
      font-size: 13px;
      color: #999;
      line-height: 20px;
  }
`

export const WriterWrapper = styled.div`

`

export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
`

export const WriterSwitch = styled.div`
  float: right;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 14px;
    margin-right: 2px;
    font-weight: bold;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const WriterItem = styled.div`
  position: relative;
  display: flex;
  margin-top: 15px;
  align-items: center;
  .avatar {
      margin-right: 10px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #ddd;
  }
  .name {
      font-size: 14px;
      color: #333;
  }
  .desc {
      margin-top: 6px;
      font-size: 12px;
      color: #969696;
  }
  .follow {
      position: absolute;
      right: 0;
      top: 5px;
      color: #42c02e;
      font-size: 13px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  margin: 30px 0;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px; 
  line-height: 60px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: all .2s ease-out;
  opacity: 0;
  background: #fff;
  color: #777;
  font-size: 14px;
  cursor: pointer;
  &.top {
    opacity: 1;
  }
`