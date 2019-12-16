//引入接口
import Http from '../../api/index'
import { Toast } from 'antd-mobile';
//引入types
import {GET_CATEGORY_NAVDATA_SUCCESS,GET_CATEGORIES_SUCCESS,GET_BRANDDETAILSUCCESS} from '../action-types/category.js'


//同步获取分类导航信息
const getCategoryNavDataSuccess = (categoriesNav) => ({type:GET_CATEGORY_NAVDATA_SUCCESS,data:categoriesNav})
//异步分发同步操作
export const getCategoryNavDataAsync = (id) => {
  return async (dispatch) => {
   const result = await Http.getCategoryNavData(id)
  //  console.log(result)
  if(Object.keys(result).length!==0){
    // console.log(result)
    Toast.success('欢迎光临')
    dispatch(getCategoryNavDataSuccess(result))
  }else{
    Toast.fail('请求错误')
  }
      // .then((res)=>{
      //   console.log(res)
      //   dispatch(getCategoryNavDataSuccess(res))
      // })
      // .catch((err)=>{
      //   Toast.fail(err)
      // })
      // dispatch(getCategoryNavDataSuccess(categories))
  }
}

//同步获取分类信息数据
const getCategoiesSuccess = (goods) =>({type:GET_CATEGORIES_SUCCESS,data:goods}) 
//异步获取分类信息数据
export const getCategoriesAsync = (req)=>{
  return async (dispatch) =>{
    const result = await Http.getGoodsData(req)
    if(Object.keys(result).length!==0){
      dispatch(getCategoiesSuccess(result))
    }
  }
}


//同步根据制造商ID获取制造商详情
const getBrandDetailSuccess = (details) =>({type:GET_BRANDDETAILSUCCESS,data:details})
//异步根据制造商ID获取制造商详情
export const getBrandDetailAsync = (brandId) => {
  return async (dispatch) => {
    const result = await Http.getBrandDetail(brandId)
    const {brand} = result
    if(brand){
      if(Object.keys(brand).length!==0){
        dispatch(getBrandDetailSuccess(brand))
      }
    }
  }
}

//--------------后台数据错误---已放弃
//同步根据制造商ID获取制造商相关商品
// const getBrandGoodsSuccess = (brandGoods) =>({type:GET_BRANDGOODSSUCCESS,data:brandGoods})
// //异步根据制造商ID获取制造商相关商品
// export const getBrandGoodsAsync = (params) => {
//   return async (dispatch) => {
//     const result = await Http.getBrandGoods(params)
//     if(Object.keys(result.brand).length!==0){
//       dispatch(getBrandGoodsSuccess(result.brand))
//     }
//   }
// }