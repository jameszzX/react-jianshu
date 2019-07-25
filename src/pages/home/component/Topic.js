import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem, TopicMore } from "../style";

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map(item => {
          return (
            <TopicItem key={item.get("id")}>
              <img alt="topic" className="topic-pic" src={item.get("imgUrl")} />
              {item.get("title")}
            </TopicItem>
          );
        })}
        <TopicMore>更多热门专题 ></TopicMore>
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "topicList"])
});

export default connect(
  mapState,
  null
)(Topic);
