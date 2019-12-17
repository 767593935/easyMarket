// 这是一个js文件,也是一个js模块
// 包含了多个函数,创建reducers的,每个函数就是一个reducer,多个函数就是多个reducer,就是reducers
//就写一个函数,就是一个reducer函数,这个函数需要两个参数:
// 参数1:一个默认值
// 参数2:action对象
// 判断action.type,根据不同的type,对数据(action.data)做不同的操作
// import {combineReducers} from 'redux'
// import { INCREMENT, DECREMENT } from './action-types.js'
// // 最终这个函数也要暴露出去
// function number(prevState = 0, action) {
//   console.log(prevState,action)
//   // 判断type
//   switch (action.type) {
//     case INCREMENT:
//       return prevState + action.data  // 加的操作
//     case DECREMENT:
//       return prevState - action.data  // 减的操作
//     default:
//       return prevState
//   }
// }
// export default combineReducers({
//   number,
//   arr
// })
// combineReducers暴露出去一个对象
import { combineReducers } from 'redux'
import { GETCARTDATA, POSTCARTCHECK, POSTCARDELETE, POSTCARUPDATE } from './action-types.js'

function getData (prevState = { cartList: [], cartTotal: {} }, action) {
  switch (action.type) {
    case GETCARTDATA:
      return action.data
    case POSTCARTCHECK:
      return {
        cartList: action.data.data.cartList,
        cartTotal: action.data.data.cartTotal
      }
    case POSTCARDELETE:
      // console.log('55555555')
      return {
        cartList: action.data.data.cartList,
        cartTotal: action.data.data.cartTotal
      }
      // case POSTCARUPDATE:
      // return {
      //   ...prevState,
      //   data:action.data
        
      // }
      
    default:
      return prevState
  }
}
function change(prevState=false,action){
  switch (action.type) {
    case POSTCARUPDATE:
      return action.data
      
  
    default:
      return prevState
  }
}


export default combineReducers({
  getData,
  change
})