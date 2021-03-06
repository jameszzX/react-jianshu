import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const randomWriter = list => ({
  type: constants.RANDOM_WRITER,
  list
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page));
    });
  };
};

export const toggleTopShow = show => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});
