import React from "react";

//导入 静态图 还需要导入 gif图

import defaultImg from "../../assets/image/发射.png";

import sendImg from "../../assets/image/发射.gif";

import { connect } from "react-redux";

class Boy extends React.Component {
  // 定义 UI 级别的 state
  state = {
    isSend: false
  };
  handleClick = () => {
    let { isSend } = this.state;

    // if (!isSend) {
    //   // 这里需要取反了， 因为我们的默认状态是false，显示的是 发送爱心，所以当我们一点击的时候，取到的这个状态是还没有更新的状态，所以我们需要取反
    //   this.props.sendLove();
    // } else {
    //   this.props.stopLove();
    // }
    isSend ? this.props.stopLove() : this.props.sendLove();
    this.setState({
      isSend: !isSend
    });
  };
  render() {
    return (
      <div>
        <img src={this.state.isSend ? sendImg : defaultImg} alt="" />
        <div>
          <button onClick={this.handleClick}>
            {this.state.isSend ? "停止发射" : "发射爱心"}
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispath => {
  // 要有一个返回值,这个对象会返回到组件的内部，可以通过 this.props 来拿到
  return {
    sendLove: () => {
      dispath({ type: "send_love" });
    },
    stopLove: () => {
      dispath({ type: "stop_love" });
    }
  };
};
export default connect(null, mapDispatchToProps)(Boy);
