// 定义一下初始化的state，Girl组件默认是展示 默认图片，所以我们的状态可以定义为false
const initState = {
  status: false
};
exports.loveReducer = (state = initState, action) => {
  console.log("reducer:", action);
  switch (action.type) {
    case "send_love":
      // 代表是发射了爱心
      return {
        status: true
      };
    case "stop_love":
      // 代表停止发射了爱心
      return {
        status: false
      };

    default:
      return state;
  }
};
