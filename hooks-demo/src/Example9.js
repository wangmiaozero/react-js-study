/*
 * @Description: ref
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-28 10:50:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-28 19:36:57
 */ 
import React, { use, useRef,useState,useEffect,Component} from 'react';
import './Examle9.css';
export default class Examle9 extends Component {
  constructor(props){
      super(props)
      this.state = {
          list:[1,2,3,4,5,6],
          current: 1, // 轮播图当前 index
          itemWidth:0, //  图片区域 宽度
          out: 3,  // 堆叠式 外部看到的数量 （左右各相同） 不限制 可以设置 0 或 大于轮播图数量
          offset:80, // 堆叠式 外部偏移量 (产生堆叠效果)
      }
  }
  componentDidMount(){
      // 获取轮播图片区域宽度
      const width = this.refs.swiperitem.clientWidth
      this.setState({
          itemWidth:width
      })
  }
  // 上一张
  onPrev = (index) => {
      const length = this.state.list.length
      if( index - 1 < 0) {
          this.setState({
              current : length -1
          })
      }else {
          this.setState({
              current : index -1 
          })
      }
  }
  // 下一张
  onNext = (index) => {
      const length = this.state.list.length
      if ( index + 1 === length) {
          this.setState({
              current: 0
          })
      }else{
          this.setState({
              current: index + 1
          })
      }
  }
  render() {
      let  {list,current,itemWidth,out,offset} = this.state
      // 水平式   计算轮播区整体位移
      let x = current === 0 ? 0 : - current*itemWidth +'px'
      const translateX = `translateX(${x})`
      return (
          <div className="card-carousels">
              {/* 水平卡片式 */}
              <h3>水平卡片式</h3>
              <div className='wrapper'>
                  <div className='inner'>
                      <div ref='swiper' className='swiper' style = {{ transform: translateX}}>
                          {
                              list.map( (item,key) => 
                              (
                                  <div ref='swiperitem' className={['swiper-item', key === current ? 'current' : ''].join(" ")} key={key}>
                                      <div className='pic' >{item}</div>
                                  </div>
                              )
                          )}    
                      </div>
                  </div>
                  {/* {点击按扭} */}
                  <div className='btn-prev' onClick = { () => this.onPrev(current)}>《</div>
                  <div className='btn-next' onClick= { () => this.onNext(current)}>》</div>
              </div>
              {/* 层叠卡片式 */}
              <h3>层叠式</h3>
              <div className='wrapper'>
                  <div className='inner'>
                      <div className='swiper2'>
                          {
                              list.map((item , index ) => {
                                  // 层叠式 计算各张图片 translateX scale  z-index 产生堆叠效果
                                  let transform = 'none'
                                  let zIndex = 0
                                  if(out ? index < current && current - index <= out : index < current){
                                      // 左边 堆叠
                                      zIndex = index +1
                                      transform = `translateX(${(index - current)*offset}px) scale(${1-(current-index)*0.1})`
                                  }else if(out ?  index > current && index - current <= out : index> current){
                                     // 右边 堆叠
                                      zIndex = list.length - index
                                      transform = `translateX(${(index - current)*offset}px) scale(${1-(index-current)*0.1})`
                                  }else if (index === current){
                                      // 当前图片
                                      zIndex = list.length
                                  }
                                  return (
                                      <div className='swiper-item' key={index} style={{transform:transform,zIndex:zIndex}}>{item}</div>
                                  )
                              })
                          }
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}