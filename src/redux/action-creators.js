// 引入action-types
import { GETCARTDATA, POSTCARTCHECK, POSTCARDELETE, POSTCARUPDATE } from './action-types.js'
// 引入接口
import ajax from "../api/index"

// 获取购物车商品数据GETCARTDATA
const getCardData = (value) => ({ type: GETCARTDATA, data: value })
// 暴露异步获取购物车数据
export const asyncGetData = () => {
  return async (dispatch) => {
    const result = await ajax.getCartData()

    dispatch(getCardData(result))
  }
}
// 是否被选中
const checked = (value) => ({ type: POSTCARTCHECK, data: value })
export const asyncCheck = ({isChecked, productIds}) => {
  return async (dispatch) => {
    const result = await ajax.postCartCheck({isChecked, productIds})
    // console.log(result)
    dispatch(checked(result))
  }
}
//删除数据
const isdelete =(value) =>({type:POSTCARDELETE,data:value})
export const asyncDelete =({productIds})=>{
  return  async(dispatch)=>{
    const result = await ajax.postCartDelete({productIds})
    // console.log(result,'2222222')
    dispatch(isdelete(result))
  }
}
// 编辑页面 改变数据 返回新数组 重新渲染页面
export const syncUpdate =(value)=>({type:POSTCARUPDATE,data:value})