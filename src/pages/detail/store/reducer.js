import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "只要坚持30天，马甲线、人鱼线，要什么线都不是问题！",
  content:
    '<img alt="" src="http://upload-images.jianshu.io/upload_images/124665-794e8f3dda8a4d4d?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp"/><p>最近几年呢，平板支撑这个动作可说是火的不行了。平板支撑是瑜伽里常见的运动姿势，但这个看似简单的动作却未必是每个人都能驾驭得到的哦！短短的一两分钟保持平板支撑姿势，是大部分人都做不到的。</p><p><b>最近几年呢，平板支撑这个动作可说是火的不行了。平板支撑是瑜伽里常见的运动姿势，但这个看似简单的动作却未必是每个人都能驾驭得到的哦！短短的一两分钟保持平板支撑姿势，是大部分人都做不到的。</b></p><p>最近几年呢，平板支撑这个动作可说是火的不行了。平板支撑是瑜伽里常见的运动姿势，但这个看似简单的动作却未必是每个人都能驾驭得到的哦！短短的一两分钟保持平板支撑姿势，是大部分人都做不到的。</p><p>最近几年呢，平板支撑这个动作可说是火的不行了。平板支撑是瑜伽里常见的运动姿势，但这个看似简单的动作却未必是每个人都能驾驭得到的哦！短短的一两分钟保持平板支撑姿势，是大部分人都做不到的。</p>'
});

const changeDetail = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return changeDetail(state, action);
    default:
      return state;
  }
};
