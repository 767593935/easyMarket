import React, { Component } from 'react';
//引入样式
import './FooterGuide.less'
import { NavLink } from 'react-router-dom'

class FooterGuide extends Component {
  state = {
    footers: [
      {
        path: '/msite',
        icon: 'icon-home',
        name: '首页'
      },
      {
        path: '/special',
        icon: 'icon-zhuanti11',
        name: '专题'
      },
      {
        path: '/category',
        icon: 'icon-leimupinleifenleileibie',
        name: '分类'
      },
      {
        path: '/cart',
        icon: 'icon-qicheqianlian-1-copy',
        name: '购物车'
      },
      {
        path: '/profile',
        icon: 'icon-wode',
        name: '我的'
      }
    ],
    currentIndex:0 //默认首页被选中
  }

  //点击添加按钮样式
  isActiveHandle = (index) => {
    // console.log(ClassName)
    // if(item.isActive){
    //   item.isActive=false
    //   this.setState((state)=>({footers:state.footers[index].isActive=false}))
    // }else{
    //   item.isActive=true
    //   this.setState((state)=>({footers:state.footers[index].isActive=true}))
    // }
    this.setState({
      currentIndex:index
    })
  }

  render () {
    const { footers,currentIndex } = this.state
    return (
      <div className='tab'>
        {
          footers.map((item, index) => {
            let ClassName = ''
            if(index===currentIndex){
              ClassName='active'
            }
            return (
              <NavLink to={item.path} key={index} 
              >
                <div className={`tabItem ${ClassName}`}
                onClick={() => {
                  this.isActiveHandle(index)
                }}>
                  <div className='itemIcon activeIcon'>
                    <i className={`iconfont ${item.icon}`}>
                    </i>
                  </div>
                  <div className='itemName'>
                    {item.name}
                  </div>
                </div>
              </NavLink>
            )
          })
        }
        {/* <NavLink to='/msite'>
          <div className='tabItem active'>
            <div className='itemIcon activeIcon'>
              <i className='iconfont icon-shouye'>
              </i>
            </div>
            <div className='itemName'>
              首页
          </div>
          </div>
        </NavLink> */}
        {/* <NavLink to='/zhuanti'>
          <div className='tabItem'>
            <div className='itemIcon'>
              <i className='iconfont icon-fuzhi'>
              </i>
            </div>
            <div className='itemName'>
              专题
          </div>
          </div>
        </NavLink>
        <NavLink to='/category'>
          <div className='tabItem'>
            <div className='itemIcon'>
              <i className='iconfont icon-leimupinleifenleileibie'>
              </i>
            </div>
            <div className='itemName'>
              分类
          </div>
          </div>
        </NavLink>
        <NavLink to='/cart'>
          <div className='tabItem'>
            <div className='itemIcon'>
              <i className='iconfont icon-gouwuche'>
              </i>
            </div>
            <div className='itemName'>
              购物车
          </div>
          </div>
        </NavLink>
        <NavLink to='/my'>
          <div className='tabItem'>
            <div className='itemIcon'>
              <i className='iconfont icon-wode'>
              </i>
            </div>
            <div className='itemName'>
              我的
            </div>
          </div>
        </NavLink> */}
      </div>
    );
  }
}

export default FooterGuide;