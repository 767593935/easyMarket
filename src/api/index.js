import ajax from './ajax'
class Https {
  /*
   * 登录
   * parmas:
   *   mobile: 电话号码
   *   password: 密码
   * */
  postLogin = parmas => ajax.post('/auth/loginByMobile', parmas)

  


  /*
   * 添加到购物车
   * /api/cart/add
   * parmas:
   *   goodsId: 商品Id
   *   number: 数量
   *   productId: 产品价格ID
   * */
  postAddCart = parmas => ajax.post('/cart/add', parmas)

  /*
   * 获取用户购物车数据
   * /api/cart/index
   * parmas:
   * */
  getCartData = (parmas = {}) => ajax.get('/cart/index', parmas)

  /*
   * 购物车商品是否选中
   * /api/cart/checked
   * parmas:
   *   isChecked: 是否选中(1:是，0否)
   *   productIds： 商品产品Id
   * */
  postCartCheck = (parmas = {}) => ajax.post('/cart/checked', parmas)

  /*
   * 删除购物车商品
   * /api/cart/delete
   * parmas:
   *   productIds： 商品产品Id
   * */
  postCartDelete = (parmas = {}) => ajax.post('/cart/delete', parmas)

  /*
   * 删除购物车商品
   * /api/cart/update
   * parmas:
   *   productIds： 商品产品Id
   * */
  postCartUpdate = (parmas = {}) => ajax.post('/cart/update', parmas)

  /*
   * 查询收藏栏商品
   * /api/collect/list
   * parmas:
   *   typeId: 0：否 、1:是
   * */
  getLikes = parmas => ajax.get('/collect/list', parmas)

  
}
export default new Https()
