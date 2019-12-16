import ajax from "./ajax"
const BASE = "http://202.96.155.121:8888"

/*
 * 登录
 * parmas:
 *   mobile: 电话号码
 *   password: 密码
 * */
export const postLogin  = (mobile,password) => ajax({
  url: BASE + "/auth/loginByMobile",
  method: 'POST',
  data: {
    mobile,
    password
  }
})

//获取首页数据
export const getHomeData = (parmas) => ajax({
  url: BASE + "/",
  method: 'GET',
  datas: {
    parmas
  }
})


/*
 *  获取专题数据
 *  parmas:
 *   page: 当前页数
 *   size: 每页数据量
 * */
// getTopicData = parmas => HttpUtils.get('/topic/list', parmas)
export const getTopicData = (page,size) => ajax({
  url: BASE + "/topic/list",
  method: 'GET',
  params: {
    page,
    size
  }
})
/*
 * 根据专题Id获取专题详情
 * parmas:
 *   id: 专题id
 * */
// getTopicDetail = parmas => HttpUtils.get('/topic/detail', parmas)
export const getTopicDetail = (parmas) => ajax({
  url: BASE + "/topic/detail",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 根据专题Id获取相关专题
 * parmas:
 *   id: 专题id
 * */
// getTopicDetailRelated = parmas => HttpUtils.get('/topic/related', parmas)
export const getTopicDetailRelated = (parmas) => ajax({
  url: BASE + "/topic/related",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 根据专题ID或者商品ID获取评论获取相关专题
 * parmas:
 *   valueId: 专题id、商品id
 *  typeId：1:专题id、0:商品id
 *  page:
 *  size:
 * */
// getCommentList = parmas => HttpUtils.get('/comment/list', parmas)
export const getCommentList = ({valueId,typeId,page,size}) => ajax({
  url: BASE + "/comment/list",
  method: 'GET',
  params:   {
      valueId,
      typeId,
      page,
      size

    } 
})
/*
 * 获取分类ID分类Nav数据
 * params:
 *   id: 当前分类Id
 * */
// getCategoryNavData = parmas => HttpUtils.get('/goods/category', parmas)
export const getCategoryNavData = (parmas) => ajax({
  url: BASE + "/goods/category",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 *  根据分类Id或者制造商Id获取商品
 *  parmas:
 *   brandId: 制造商Id（非必填）
 *   categoryId: 分类Id（非必填）
 *   sort: id(默认排序)、price(价格排序)
 *   order: 排序方式
 *   page: 当前页数
 *   size: 每页数据量
 * */
// getGoodsData = parmas => HttpUtils.get('/goods/list', parmas)
export const getGoodsData = (parmas) => ajax({
  url: BASE + "/goods/list",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 分类页初始化信息获取
 * */
// getCatalogInitData = parmas => HttpUtils.get('/catalog/index', parmas)
export const getCatalogInitData = (parmas) => ajax({
  url: BASE + "/catalog/index",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 根据分类ID获取当前分类信息和子分类
 * parmas:
 *   id: 分类Id
 * */
// getCatalogMsg = parmas => HttpUtils.get('/catalog/current', parmas)
export const getCatalogMsg = (parmas) => ajax({
  url: BASE + "/catalog/current",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 获取在售商品数量
 * */
// getSellGoodsCount = parmas => HttpUtils.get('/goods/count', parmas)
export const getSellGoodsCount = (parmas) => ajax({
  url: BASE + "/goods/count",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 根据制造商ID获取制造商详情
 * parmas:
 *   id: 制造商Id
 * */
// getBrandDetail = parmas => HttpUtils.get('/brand/detail', parmas)
export const getBrandDetail = (parmas) => ajax({
  url: BASE + "/brand/detail",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 根据制造商ID获取制造商相关商品（同根据分类ID获取商品）
 * parmas:
 *   id: 制造商Id
 *   page: 当前页数
 *   size: 每页数据量
 * */
// getBrandGoods = parmas => HttpUtils.get('/brand/detail', parmas)
export const getBrandGoods = (parmas) => ajax({
  url: BASE + "/brand/detail",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 对某个商品或专题ID进行评论
 * parmas:
 *   content: 内容
 *   typeId: 类型
 *   valueId: id
 * */
// postSetComment = parmas => HttpUtils.post('/comment/post', parmas)
export const postSetComment = (parmas) => ajax({
  url: BASE + "/comment/post",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 获取商品查询的相关信息
 * parmas: {}
 * */
// getGoodsSearchMsg = (parmas = {}) => HttpUtils.get('/search/index', parmas)
export const getGoodsSearchMsg = (parmas) => ajax({
  url: BASE + "/search/index",
  method: 'GET',
  datas: {
    parmas
  }
})

/*
 * 商品查询模糊查询关键字
 * parmas:
 *  keyword: 查询名称
 * */
// getGoodsSearchKey = (parmas = {}) => HttpUtils.get('/search/helper', parmas)
export const getGoodsSearchKey = (parmas) => ajax({
  url: BASE + "/search/helper",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 删除商品查询的历史记录
 * parmas: {}
 * */
// getDeleteGoodsSearchHistory = (parmas = {}) =>
//   HttpUtils.get('/search/clearhistory', parmas)
export const getDeleteGoodsSearchHistory = (parmas) => ajax({
  url: BASE + "/search/clearhistory",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 获取商品详情
 * /api/goods/detail
 * parmas:
 *   id: 商品id
 * */
// getGoodsDetail = (parmas = {}) => HttpUtils.get('/goods/detail', parmas)
export const getGoodsDetail = (id={}) => ajax({
  url: BASE + "/goods/detail",
  method: 'GET',
  params: {
    id
  }
})
/*
 * 相关商品
 * /api/goods/related
 * parmas:
 *   id: 商品id
 * */
// getGoodsRelated = (parmas = {}) => HttpUtils.get('/goods/related', parmas)
export const getGoodsRelated = (parmas) => ajax({
  url: BASE + "/goods/related",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 获取用户购物车商品数量
 * /api/cart/goodscount
 * parmas:
 * */
// getCartNum = (parmas = {}) => HttpUtils.get('/cart/goodscount', parmas)
export const getCartNum = () => ajax({
  url: BASE + "/cart/goodscount",
  method: 'GET',
  headers:{
    needToken:true
  }
})
/*
 * 是否添加到收藏栏
 * /api/collect/addordelete
 * parmas:
 *   typeId: 0：是 、1:否（商品状态）
 *   valueId: 商品Id
 * */
// postDoLikes = parmas => HttpUtils.post('/collect/addordelete', parmas)
export const postDoLikes = (parmas) => ajax({
  url: BASE + "/collect/addordelete",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 查询收藏栏商品
 * /api/collect/list
 * parmas:
 *   typeId: 0：否 、1:是
 * */
// getLikes = parmas => HttpUtils.get('/collect/list', parmas)
export const getLikes = (parmas) => ajax({
  url: BASE + "/collect/list",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 添加到购物车
 * /api/cart/add
 * parmas:
 *   goodsId: 商品Id
 *   number: 数量
 *   productId: 产品价格ID
 * */
// postAddCart = parmas => HttpUtils.post('/cart/add', parmas)
export const postAddCart = (parmas) => ajax({
  url: BASE + "/cart/add",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 获取用户购物车数据
 * /api/cart/index
 * parmas:
 * */
// getCartData = (parmas = {}) => HttpUtils.get('/cart/index', parmas)
export const getCartData = (parmas) => ajax({
  url: BASE + "/cart/index",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 购物车商品是否选中
 * /api/cart/checked
 * parmas:
 *   isChecked: 是否选中(1:是，0否)
 *   productIds： 商品产品Id
 * */
// postCartCheck = (parmas = {}) => HttpUtils.post('/cart/checked', parmas)
export const postCartCheck = (parmas) => ajax({
  url: BASE + "/cart/checked",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 删除购物车商品
 * /api/cart/delete
 * parmas:
 *   productIds： 商品产品Id
 * */
// postCartDelete = (parmas = {}) => HttpUtils.post('/cart/delete', parmas)
export const postCartDelete = (parmas) => ajax({
  url: BASE + "/cart/delete",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 删除购物车商品
 * /api/cart/update
 * parmas:
 *   productIds： 商品产品Id
 * */
// postCartUpdate = (parmas = {}) => HttpUtils.post('/cart/update', parmas)
export const postCartUpdate = (parmas) => ajax({
  url: BASE + "/cart/update",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 获取用户地址数据
 * /api/address/list
 * */
// getAddressList = (parmas = {}) => HttpUtils.get('/address/list', parmas)
export const getAddressList = (parmas) => ajax({
  url: BASE + "/address/list",
  method: 'GET',
  datas: {
    parmas
  }
})
/*
 * 新增地址
 * /api/address/save
 * parmas:
 * id: 地址ID
 * */
// postAddAddress = (parmas = {}) => HttpUtils.post('/address/save', parmas)
export const postAddAddress = (parmas) => ajax({
  url: BASE + "/address/save",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 获取删除地址数据
 * /api/address/delete
 * parmas:
 * id: 地址ID
 * */
// postDelteAddress = (parmas = {}) => HttpUtils.post('/address/delete', parmas)
export const postDelteAddress = (parmas) => ajax({
  url: BASE + "/address/delete",
  method: 'POST',
  datas: {
    parmas
  }
})
/*
 * 获取删除地址数据
 * /api/address/delete
 * parmas:
 * id: 地址ID
 * */
// postCheckOne = (parmas = {}) => HttpUtils.post('/cart/checkOne', parmas)
export const postCheckOne = (parmas) => ajax({
  url: BASE + "/cart/checkOne",
  method: 'POST',
  datas: {
    parmas
  }
})


