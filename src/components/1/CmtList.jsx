import React from 'react'
// 导入评论组件
import CmtItem  from '@/components/1/CmtItem'
export default class CmtList extends React.Component{
    constructor(){
      super()
      this.state = {
        commentList :[
          {id:1,user:'张三',content:'哈哈,沙发'},
          { id: 2, user: '李四', content: '哈哈，板凳' },
          { id: 3, user: '王五', content: '哈哈，凉席' },
          { id: 4, user: '赵六', content: '哈哈，砖头' },
          { id: 5, user: '田七', content: '哈哈，楼下山炮' }
        ]
      }
    }
    render(){
      return <div>
        <h2>这是评论组件</h2>
        {this.state.commentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
      </div>
    }
  }
/* export default {
  CmtList
} */