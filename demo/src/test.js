/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-11 22:20:25
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-11 22:31:08
 */
// imrc
import React, { Component } from 'react';
// cc
class Test extends Component {
  state = {  }
  render() { 
    return ( <div></div> );
  }
}
export default Test;
// impt
import PropTypes from 'prop-types';
// ccc
class  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  );
  }
}
 
export default ;
// sfc
const  = () => {
  return (  );
}
 
export default ;

// cdm
componentDidMount() {
  
}
// cwm
//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  
}
// cwrp
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
  
}
// gds
static getDerivedStateFromProps(nextProps, prevState) {
  
}
// scu
shouldComponentUpdate(nextProps, nextState) {
  
}
// cwu
//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
componentWillUpdate(nextProps, nextState) {
  
}
// cdu
componentDidUpdate(prevProps, prevState) {
  
}
// cdc
componentDidCatch(error, info) {
  
}
// gsbu
getSnapshotBeforeUpdate(prevProps, prevState) {
  
}
// ss
this.setState({ :  });
//ssf
this.setState(prevState => {
  return { : prevState. };
});
// ren
render() {
  return (
     
  );
}
// rprop
class  extends Component {
  state = { :  }
  render() { 
    return this.props.render({
      : this.state.
    });
  }
}
 
export default ;
// hoc
function () {
  return class extends Component {
    constructor(props) {
      super(props);
    }
 
    render() {
      return < {...this.props} />
    }
  }
}