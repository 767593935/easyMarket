import React, { Component } from 'react';
//引入样式
import './Header.less'

class Header extends Component {
  clickLeft(){
    this.props.clickLeft()
  }
  render () {
    return (
      <div className='header'>
        <div className='left' onClick={this.clickLeft.bind(this)}>
          <i className='iconfont icon-xiangzuo'>

          </i>
        </div>
        <div className='title'>
          奇趣分类
      </div>
        <div className='right'>

        </div>
      </div>
    );
  }
}

export default Header;