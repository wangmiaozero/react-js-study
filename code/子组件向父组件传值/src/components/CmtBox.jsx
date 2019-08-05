import React from 'react'

export default class CmtBox extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div>


      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">发表评论</h3>
        </div>
        <div className="panel-body form-inline">


          <div className="input-group">
            <div className="input-group-addon">评论人</div>
            {/* 给 文本框 元素，设置 ref（reference） 引用  */}
            <input type="text" className="form-control" ref="user" />
          </div>

          <div className="input-group">
            <div className="input-group-addon">评论内容</div>
            <input type="text" className="form-control" ref="content" />
          </div>


          <button type="button" className="btn btn-primary" onClick={() => this.postCmt()}>发表评论</button>



        </div>
      </div>


    </div>
  }

  // 点击按钮 发表评论
  postCmt = () => {
    // 分析：
    // 1. 获取到 文本框中的 值
    const user = this.refs.user.value
    const content = this.refs.content.value
    // 2. 校验值 是否为空 如果为空，则 alert 弹框提示并退出后续流程
    if (user.trim().length <= 0 || content.trim().length <= 0) return alert('信息不完整！')
    // 3. 如果验证通过，怼出一个评论信息对象
    const cmtobj = { user, content, id: Date.now() }
    // 4. 将最新的评论消息，追加 并 保存到 数组中
    //  4.1 这是，就涉及到了 子组件 向 父组件传值
    //  4.2 注意： 父 向 子 传值，用的是 属性绑定的形式 vue :initcount="10"    initcount={10}
    //  4.3 注意： 子 向 父 传值，用的是 方法的调用；子组件在调用父组件传递过来的方法的时候，同时传递一个实参过去

    // this.props.func(100)
    this.props.postcmt123(cmtobj)
    this.refs.user.value = this.refs.content.value = ''
  }
}