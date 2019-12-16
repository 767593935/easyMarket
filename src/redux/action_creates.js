import {GRT_GOODSDETAIL,GET_GOODRELATED,CHANGE_ISADD,ADD_CART,ADD_COLLECT,GET_COMMENT,GET_CARTNUM} from "./action_types"
import ajax from "../api/index"
// 获取商品详情
export const getGoodsDetailSync=(value)=>({type:GRT_GOODSDETAIL,data:value})
export const getGoodsDetailAsync=(value)=>{
  return async (dispatch)=>{
    const result=await  ajax.getGoodsDetail({id:value})
    dispatch(getGoodsDetailSync(result))
  }
}
// 获取商品相关推荐
export const getGoodsRelatedSync=(value)=>({type:GET_GOODRELATED,data:value})
export const getGoodsRelatedAsync=(value)=>{
  return async(dispatch)=>{
    const result=await ajax.getGoodsRelated({id:value})
    dispatch(getGoodsRelatedSync(result))

  }
}
// 是否加入购物车状态改变
export const changeIsadd=(value)=>({type:CHANGE_ISADD,data:value})
// 加入购物车
export const addCart=(data)=>({type:ADD_CART,data})
export const addCartAsync=({goodsId,number,productId})=>{
  return async(dispatch)=>{
    const result=await ajax.postAddCart({goodsId,number,productId})
    dispatch(addCart(result.data))
  }

}


// 加入收藏
export const addCollect=(value)=>({type:ADD_COLLECT,data:value})
export const addCollectAsync=({typeId,valueId})=>{
  return async (dispatch)=>{
    const result=await ajax.postDoLikes({typeId,valueId})
    dispatch(addCollect(result.data))

  }
}

// 查看评论
export const getComment=(value)=>({type:GET_COMMENT,data:value})
export const getCommentAsync=({valueId,typeId,page,size})=>{
  return async (dispatch)=>{
    const result = await ajax.getCommentList({valueId,typeId,page,size})
    // console.log(result)
    dispatch(getComment(result.data))
}
}

// 获取购物车中的数据
export const getCartNum=(value)=>({type:GET_CARTNUM,data:value})
export const getCartNumAsync=()=>{
  return async (dispatch)=>{
    const result=await ajax.getCartData()
    dispatch(getCartNum(result.cartTotal.checkedGoodsCount))
  }
}