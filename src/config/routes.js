
//引入登录组件
import Login from '../pages/Login/Login.jsx'
//引入专题页面
import Special from '../pages/Special/Special.jsx'
//引入message 
import Messages from '../pages/Messages/Messages.jsx'
//引入Detail
import Detail from '../pages/Detail/Detail.jsx'
//引入底部
import FooterGuide from '../pages/FooterGuide/FooterGuide.jsx'
//引入主页
import Msite from '../pages/Msite/Msite.jsx'
//引入分类
import Category from '../pages/Category/Category.jsx'
//引入购物车
import Cart from '../pages/Cart/Cart.jsx'
//引入个人中心登录
import Profile from '../pages/Profile/Profile.jsx'
//引入评论页
import Comment from '../pages/Comment/Comment.jsx'


export default[
  {
    exact:true,
    path:'/msite',
    component:Msite
  },
  {
    exact:true,
    path:'/special',
    component:Special
  },
  {
    exact:true,
    path:'/category',
    component:Category
  },
  {
    exact:true,
    path:'/cart',
    component:Cart
  },
  {
    exact:true,
    path:'/profile',
    component:Profile
  },


  {
    exact:true,
    path:'/',
    component:Login
  },
  {
    exact:true,
    path:'/messages/:id',
    component:Messages
  },
  {
    exact:true,
    path:'/detail/:id',
    component:Detail
  },

  {
    exact:true,
    path:'/comment/:id',
    component:Comment
  },

 
  {
    exact:true,
    path:'/footerGuide',
    component:FooterGuide
  },
 
  

]