import React, { Component } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem, RecommendDownload } from "../style";

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
        <RecommendDownload>
          <img className="qrcode" alt="james" src="https://image.jamescathy.top/my-qrcode.jpeg" />
          <div>
            <p className="title">下载简书手机App</p>
            <p className="desc">随时随地发现和创作内容</p>
          </div>
        </RecommendDownload>
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "recommendList"])
});

export default connect(
  mapState,
  null
)(Recommend);
