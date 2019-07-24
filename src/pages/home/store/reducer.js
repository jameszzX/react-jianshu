import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage
  });
};

const randomWriter = (state, action) => {
  const newList = action.list.toJS().sort((a, b) => {
    return Math.random() > 0.5 ? -1 : 1;
  });
  return state.set("writerList", fromJS(newList));
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    case constants.RANDOM_WRITER:
      return randomWriter(state, action);
    default:
      return state;
  }
};
