import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";
import { DetailWrapper, DetailHeader, DetailContent } from "./style";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <DetailHeader>{title}</DetailHeader>
        <DetailContent dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail));
