import {GRT_GOODSDETAIL,GET_GOODRELATED,CHANGE_ISADD,ADD_CART,ADD_COLLECT,GET_COMMENT,GET_CARTNUM} from "./action_types"
import { combineReducers } from "redux"
function getGoodsDetail(preventValue={},action){
  switch (action.type) {
    case GRT_GOODSDETAIL:
      return action.data 
    default:
      return preventValue
  }
}
function getGoodsRelated(preventValue=[],action){
  switch (action.type) {
    case GET_GOODRELATED:
      return action.data.goodsList
    default:
      return preventValue
  }
}
function changeIsadd(preventValue=false,action){
  switch (action.type) {
    case CHANGE_ISADD:
      return (
       !preventValue
      )
    default:
      return preventValue
  }
}
// 添加到购物车
function addCart(preventValue={},action){
  switch (action.type) {
    case ADD_CART:
      return action.data
    default:
      return preventValue
  }
}
// 加入收藏
function addCollect(preventValue={},action){
  switch (action.type) {
    case ADD_COLLECT:
      return action.data
    default:
      return preventValue
  }

}
// 得到评论
function getComment(preventValue={},action){
  switch (action.type) {
    case GET_COMMENT:
      return action.data
    default:
      return preventValue
  }

}
// 获取购物车数据
function getCartDate(preventValue=0,action){
  switch (action.type) {
    case GET_CARTNUM:
      return action.data
  
    default:
      return preventValue
  }

}

export default combineReducers({
  getGoodsDetail,
  getGoodsRelated,
  changeIsadd,
  addCart,
  addCollect,
  getComment,
  getCartDate
})