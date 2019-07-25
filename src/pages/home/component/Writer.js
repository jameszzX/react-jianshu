import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { WriterWrapper, WriterTitle, WriterSwitch, WriterItem } from "../style";

class Writer extends PureComponent {
  render() {
    const { list, handleChangeWriter } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          <span>推荐作者</span>
          <WriterSwitch onClick={() => handleChangeWriter(list, this.spinIcon)}>
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xeb7b;
            </i>
            换一批
          </WriterSwitch>
        </WriterTitle>
        {list.map(item => {
          return (
            <WriterItem key={item.get("id")}>
              <img className="avatar" alt="" src={item.get("imgUrl")} />
              <div>
                <p className="name">{item.get("name")}</p>
                <p className="desc">
                  写了{item.get("text")}k字 · {item.get("like")}k喜欢
                </p>
              </div>
              <span className="follow">关注</span>
            </WriterItem>
          );
        })}
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "writerList"])
});

const mapDispatch = dispatch => {
  return {
    handleChangeWriter(list, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      dispatch(actionCreators.randomWriter(list));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Writer);
