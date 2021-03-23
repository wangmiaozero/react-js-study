import React from "react";

// 导入资源图片
import defaultImg from "../../assets/image/接收.jpg";

import ReciveImg from "../../assets/image/接收-01.jpg";

import { connect } from "react-redux";

class Girl extends React.Component {
  render() {
    console.log("Girl:", this.props);
    return (
      <div>
        <img src={this.props.status ? ReciveImg : defaultImg} alt="" />
      </div>
    );
  }
}
/**
 *
 * @param {*} state 就是 store 返回过来的 状态
 */
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Girl);
